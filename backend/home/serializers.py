from rest_framework import serializers
from .models import LandingContent
from .models import Vision

class LandingContentSerializer(serializers.ModelSerializer):
    class Meta:
        model = LandingContent
        fields = '__all__'

class VisionSerializer(serializers.ModelSerializer):
    image = serializers.SerializerMethodField()

    class Meta:
        model = Vision
        fields = '__all__'

    def get_image(self, obj):
        request = self.context.get('request')
        if obj.image and hasattr(obj.image, 'url'):
            return request.build_absolute_uri(obj.image.url) if request else obj.image.url
        return None
