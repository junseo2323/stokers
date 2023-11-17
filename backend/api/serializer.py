from .models import User
from .models import Questlist 
from .models import Quizmission
from .models import Textmission
from .models import Imagemission
from .models import UserImage
########################################33
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth import get_user_model
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer
from rest_framework import serializers
from rest_framework.validators import UniqueValidator
from rest_framework_simplejwt.serializers import TokenObtainPairSerializer

class MyTokenObtainPairSerializer(TokenObtainPairSerializer):
    @classmethod
    def get_token(cls, user):
        token = super().get_token(user)
        # Frontend에서 더 필요한 정보가 있다면 여기에 추가적으로 작성하면 됩니다. token["is_superuser"] = user.is_superuser 이런식으로요.
        token['username'] = user.username
        token['email'] = user.email
        token['status'] = user.status
        token['theme'] = user.theme
        
        return token

class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(
        write_only=True, required=True, validators=[validate_password])
    password2 = serializers.CharField(write_only=True, required=True)
 
    class Meta:
        model = User
        fields = ('username', 'password', 'password2','phone','email','status')

    def validate(self, attrs):
        if attrs['password'] != attrs['password2']:
            raise serializers.ValidationError(
                {"password": "Password fields didn't match."})

        return attrs
 
    def create(self, validated_data):
        user = User.objects.create(
            username=validated_data['username'],
            phone=validated_data['phone'],
            email=validated_data['email'],
            status=validated_data['status'],

        )

        user.set_password(validated_data['password'])
        user.save()

        return user

class QuestlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Questlist
        fields = '__all__'

class QuizlistSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quizmission
        fields = '__all__'
 
class TextmissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Textmission
        fields = ('QuestId','username', 'TextAnswer')

    def create(self, validated_data):
        textmission = Textmission.objects.create(
            username=validated_data['username'],
            QuestId=validated_data['QuestId'],
            TextAnswer=validated_data['TextAnswer']
        )

        textmission.save()
        return textmission

class ImagemissionSerializer(serializers.ModelSerializer):
    class Meta:
        model = Imagemission
        fields = '__all__'

class UserImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = UserImage
        fields = ['username', 'image', 'QuestId']  # QuestId 추가



class StatusSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['status']

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['theme']

