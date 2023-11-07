from django.urls import path
from . import views

from rest_framework_simplejwt.views import (
    TokenRefreshView,
)

urlpatterns = [
    path('token/', views.MyTokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('token/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('register/', views.RegisterView.as_view(), name='auth_register'),
    path('questlist/', views.QuestlistAPIView.as_view(), name='questlist-api'),
    path('questlist/<int:QuestId>/', views.QuestlistDetailView.as_view(), name='questlist-detail-api'),
    path('quizlist/', views.QuizlistAPIView.as_view(), name='quizlist-api'),
    path('quizlist/<int:QuestId>/', views.QuizlistDetailView.as_view(), name='quizlistl-detail-api'),
    path('textmission/<int:QuestId>/', views.TextmissionView.as_view(), name='textmission-api'),
    path('', views.getRoutes)
]