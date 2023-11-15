from django.contrib.auth.models import User
from django.db import models
from django.core.exceptions import ValidationError
from django.contrib.auth.models import AbstractUser	# AbstractUser 불러오기

class User(AbstractUser):
    phone = models.IntegerField()
    status = models.IntegerField(default=0)  # 퀴즈 진행도를 나타내는 정수값
    first_name = None

class Questlist(models.Model):
    QuestId = models.IntegerField(primary_key=True)
    Name = models.CharField(max_length=125)
    Subname = models.CharField(max_length=256)
    Level = models.IntegerField()
    Type = models.IntegerField()
    Detail = models.CharField(max_length=256)

class Quizmission(models.Model):
    QuestId = models.OneToOneField(Questlist, on_delete=models.CASCADE, primary_key=True)
    Selection1 = models.CharField(max_length=125)  # 최대 4개의 선택지를 저장할 수 있는 배열 필드
    SelectionDetail1 = models.CharField(max_length=125)  # 선택지에 대한 설명 또는 부가 정보
    Selection2 = models.CharField(max_length=125)  # 최대 4개의 선택지를 저장할 수 있는 배열 필드
    SelectionDetail2 = models.CharField(max_length=125)  # 선택지에 대한 설명 또는 부가 정보
    Selection3 = models.CharField(max_length=125)  # 최대 4개의 선택지를 저장할 수 있는 배열 필드
    SelectionDetail3 = models.CharField(max_length=125)  # 선택지에 대한 설명 또는 부가 정보
    Selection4 = models.CharField(max_length=125)  # 최대 4개의 선택지를 저장할 수 있는 배열 필드
    SelectionDetail4 = models.CharField(max_length=125)  # 선택지에 대한 설명 또는 부가 정보
    QuizAnswer = models.IntegerField()  # 정답을 나타내는 필드 (1, 2, 3, 4 중 하나)
 
    def __str__(self):
        return self.QuizAnswer

class Imagemission(models.Model):
    QuestId = models.OneToOneField(Questlist, on_delete=models.CASCADE, primary_key=True)
    Image = models.ImageField(upload_to='images/')
    processed_result = models.JSONField()

class Textmission(models.Model):
    QuestId = models.ForeignKey(Questlist, on_delete=models.CASCADE)
    username = models.ForeignKey(User, on_delete=models.CASCADE)
    TextAnswer = models.CharField(max_length=256)

    def save(self, *args, **kwargs):
        # 중복된 레코드가 있는지 확인
        existing_textmissions = Textmission.objects.filter(username=self.username, QuestId=self.QuestId)
        
        # 중복된 레코드가 없을 경우에만 저장
        if not existing_textmissions.exists():
            super().save(*args, **kwargs)


class Executionmission(models.Model):
    QuestId = models.OneToOneField(Questlist, on_delete=models.CASCADE, primary_key=True)
    ExecutionAnswer = models.BooleanField()


     