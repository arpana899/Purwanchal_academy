from django.urls import path
from .views import get_principal_message

urlpatterns = [
    path('principal-message/', get_principal_message, name='principal-message-api'),
]