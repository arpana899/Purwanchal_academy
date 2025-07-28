from rest_framework import serializers
from .models import PrincipalMessage

class PrincipleMessageSeializer(serializers.ModelSerializer):
    class Meta:
        model = PrincipalMessage
        fields='_all_'