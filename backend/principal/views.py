from django.http import JsonResponse
from .models import PrincipalMessage

def get_principal_message(request):
    default_message = (
        "Education is essential for every child's future, and fostering extracurricular activities "
        "plays a crucial role in their overall development—physically, mentally, and emotionally. "
        "With a strong commitment to excellence, Mount Saipal International Academy effectively manages "
        "its academic, administrative, and economic activities, ensuring a well-rounded education that "
        "nurtures students' growth and potential."
    )
    try:
        message_obj = PrincipalMessage.objects.latest('id')
        message = message_obj.message
    except PrincipalMessage.DoesNotExist:
        message = default_message
    return JsonResponse({"message": message})
