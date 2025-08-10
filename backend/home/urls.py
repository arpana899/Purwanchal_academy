from django.urls import path
from . import views

urlpatterns = [
    path('landing-content/', views.get_landing_content),
    path('vision/', views.get_vision)
]
