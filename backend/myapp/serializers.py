from rest_framework import serializers
from .models import Picture

class PictureSerializer(serializers.ModelSerializer):
    image = serializers.ImageField(use_url=True)  # <--- important

    class Meta:
        model = Picture
        fields = ['id', 'title', 'image', 'uploaded_at']
