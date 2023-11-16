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
    path('textmission/', views.TextmissionView.as_view(), name='textmission-api'),
    path('status/<str:Username>/', views.StatuslistAPIView.as_view(), name='status-api'),
    path('update_status/<str:username>/', views.UpdateUserStatusView.as_view(), name='update_user_status'),
    path('imagemission/', views.ImagemissionCheckView.as_view(), name='imagemission-check'),
    path('news/<str:article>/', views.get_news, name='get_news'),
    path('update_theme/<str:username>/', views.UpdateUserTheme.as_view(), name='update_user_theme'),



    path('', views.getRoutes)
]  