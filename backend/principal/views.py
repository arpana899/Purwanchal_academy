from django.http import JsonResponse
from .models import PrincipalMessage

def get_principal_message(request):
    try:
        message_obj = PrincipalMessage.objects.latest('id')
        message = message_obj.message
    except PrincipalMessage.DoesNotExist:
        message = "Welcome! Principal message not set yet."
    return JsonResponse({"message":message})