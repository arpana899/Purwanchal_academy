from rest_framework.response import Response
from rest_framework.decorators import api_view
from .models import LandingContent
from .serializers import LandingContentSerializer
from .models import Vision
from .serializers import VisionSerializer

@api_view(['GET'])
def get_landing_content(request):
    content = LandingContent.objects.last()  
    if content:
        serializer = LandingContentSerializer(content)
        return Response(serializer.data)
    return Response(None) 

@api_view(['GET'])
def get_vision(request):
    content = Vision.objects.last()
    if content:
        serializer = VisionSerializer(content, context={'request': request})
        return Response(serializer.data)
    return Response(None)

