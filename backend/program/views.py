from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Program
from .serializers import ProgramSerializer

# Create your views here.
class ProgramAPIView(APIView):
    def get(self, request):
        data = Program.objects.all()
        serializers = ProgramSerializer(data, many=True)
        return Response(serializers.data)