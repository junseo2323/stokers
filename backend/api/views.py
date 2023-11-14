from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.authentication import TokenAuthentication
from django.http import JsonResponse
from api.serializer import MyTokenObtainPairSerializer, RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework import generics

from django.contrib.auth import get_user_model

User = get_user_model()

from rest_framework.permissions import AllowAny, IsAuthenticated
from rest_framework.viewsets import ModelViewSet
from .models import Questlist
from .models import Quizmission
from .models import Textmission
from .serializer import StatusSerializer
from .serializer import QuestlistSerializer
from .serializer import QuizlistSerializer
from .serializer import TextmissionSerializer
from rest_framework import status

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
        '/api/textmission/<int:QuestId>/',
        '/api/status/<str:Username>/',
        'update_status/<str:username>/',

    ]
    return Response(routes)