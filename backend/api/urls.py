from django.urls import path
from .views import get_gallery_images
from django.conf import settings
from django.conf.urls.static import static

urlpatterns = [
    path('gallery/', get_gallery_images, name='gallery-api'),
    
] + static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
