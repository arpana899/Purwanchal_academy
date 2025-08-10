from django.urls import path
from .views import ProgramAPIView

urlpatterns = [
    path('program/', ProgramAPIView.as_view())
]