from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from django.http import JsonResponse
from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics
from django.views.decorators.csrf import csrf_exempt
from django.utils.decorators import method_decorator
from django.shortcuts import get_object_or_404
from django.contrib.auth import get_user_model

User = get_user_model()

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import Questlist
from .models import Quizmission
from .models import Textmission
from .models import Imagemission
from .serializer import StatusSerializer
from .serializer import QuestlistSerializer
from .serializer import QuizlistSerializer
from .serializer import TextmissionSerializer
from .serializer import UserImageSerializer
from .serializer import UserSerializer
from rest_framework import status
from PIL import Image
import pytesseract
from PIL import ImageEnhance
import re
import requests

def get_news(request,article):
    url = 'https://openapi.naver.com/v1/search/news.json'
    headers = {
        'X-Naver-Client-Id': '8Drr4Vw8zAIf48IUeHHv',
        'X-Naver-Client-Secret': 'wVqfM7kihY',
    }
    params = {
        'query': article,
        'display': 5,
    }

    response = requests.get(url, headers=headers, params=params)

    # 응답 데이터를 JSON 형식으로 변환하여 클라이언트에게 전송
    return JsonResponse(response.json(), safe=False)


def ocr(path,word):
    image = Image.open(path)
    enhancer = ImageEnhance.Contrast(image)
    image = enhancer.enhance(2.0)  # 조절할 대비값 설정
    image = image.convert('L')
    image.save('preprocessed_image.jpeg')
    text = pytesseract.image_to_string(image, lang='kor', config='--oem 3')
    word_pattern = re.compile(r'\b\w+\b')
    words = word_pattern.findall(text)
    res = ''.join(list(words))
    print(word)
    print(word in res)
    return word in res

def extract_text_from_image(image_path):
    # 이미지에서 텍스트 추출
    text = pytesseract.image_to_string(Image.open(image_path),lang="kor+eng")

    return text
# Create your views here.

class MyTokenObtainPairView(TokenObtainPairView):
    serializer_class = MyTokenObtainPairSerializer
 
class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = RegisterSerializer

class QuestlistAPIView(generics.ListAPIView):
    queryset = Questlist.objects.all()  # Questlist 모델의 모든 데이터를 가져옵니다.
    serializer_class = QuestlistSerializer

class QuestlistDetailView(generics.RetrieveAPIView):
    queryset = Questlist.objects.all()
    serializer_class = QuestlistSerializer
    lookup_field = 'QuestId'  # 이 필드를 기반으로 객체를 가져올 것입니다.

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Questlist.DoesNotExist:
            return Response({'error': 'Questlist not found'}, status=status.HTTP_404_NOT_FOUND)

class QuizlistAPIView(generics.ListAPIView):
    queryset = Quizmission.objects.all()  # Questlist 모델의 모든 데이터를 가져옵니다.
    serializer_class = QuizlistSerializer

class QuizlistDetailView(generics.RetrieveAPIView):
    queryset = Quizmission.objects.all()
    serializer_class = QuizlistSerializer
    lookup_field = 'QuestId'  # 이 필드를 기반으로 객체를 가져올 것입니다.

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Questlist.DoesNotExist:
            return Response({'error': 'Quizlist not found'}, status=status.HTTP_404_NOT_FOUND)

class TextmissionView(generics.CreateAPIView):
    queryset = Textmission.objects.all()
    permission_classes = (AllowAny,)
    serializer_class = TextmissionSerializer


class StatuslistAPIView(generics.ListAPIView):
    queryset = User.objects.all()  
    serializer_class = StatusSerializer
    lookup_field = 'Username'  # 이 필드를 기반으로 객체를 가져올 것입니다.

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Questlist.DoesNotExist:
            return Response({'error': 'Quizlist not found'}, status=status.HTTP_404_NOT_FOUND)

class UpdateUserStatusView(generics.UpdateAPIView):
    serializer_class = StatusSerializer  # serializer 클래스를 명시적으로 지정

    def put(self, request, username, format=None):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.get_serializer(user, data=request.data)  # 기본 serializer 인스턴스를 사용
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    

@method_decorator(csrf_exempt, name='dispatch')
class ImagemissionCheckView(generics.CreateAPIView):
    serializer_class = UserImageSerializer
    
    def post(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        ansdata = self.perform_create(serializer)
        headers = self.get_success_headers(serializer.data)
        return JsonResponse({'ans': ansdata}, status=201, headers=headers)

    def perform_create(self, serializer):
        quest_id = self.request.data.get('QuestId')  # 입력으로 받은 QuestId
        user_image = serializer.save()

        # QuestId에 해당하는 미션을 가져옵니다
        imagemission = get_object_or_404(Imagemission, QuestId=quest_id)

        image_answer = imagemission.ImageAnswer
        image_path = user_image.image.path

        # 여기서 image_path와 image_answer를 사용하여 OCR 함수를 구현하세요
        ocr_result = ocr(image_path, image_answer)

        # OCR 결과를 기반으로 응답을 커스터마이징할 수 있습니다
        response_data = {'ocr_result': ocr_result}
        return response_data
        
class UpdateUserTheme(generics.UpdateAPIView):
    serializer_class = UserSerializer  # serializer 클래스를 명시적으로 지정

    def put(self, request, username, format=None):
        try:
            user = User.objects.get(username=username)
        except User.DoesNotExist:
            return Response({'error': 'User not found'}, status=status.HTTP_404_NOT_FOUND)

        serializer = self.get_serializer(user, data=request.data)  # 기본 serializer 인스턴스를 사용
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ThemelistAPIView(generics.ListAPIView):
    queryset = User.objects.all()  
    serializer_class = UserSerializer
    lookup_field = 'Username'  # 이 필드를 기반으로 객체를 가져올 것입니다.

    def retrieve(self, request, *args, **kwargs):
        try:
            instance = self.get_object()
            serializer = self.get_serializer(instance)
            return Response(serializer.data, status=status.HTTP_200_OK)
        except Questlist.DoesNotExist:
            return Response({'error': 'Quizlist not found'}, status=status.HTTP_404_NOT_FOUND)


@api_view(['GET'])
def getRoutes(request):
    routes = [
        '/api/token/',
        '/api/register/',
        '/api/token/refresh/',
        '/api/questlist',
        '/api/questlist/<int:QuestId>/',
        '/api/quizlist',
        '/api/quizlist/<int:QuestId>/',
        '/api/textmission/',
        '/api/status/<str:Username>/',
        '/api/update_status/<str:username>/',
        '/api/update_theme/<str:username>/',
        '/api/imagemission/',

    ]
    return Response(routes)