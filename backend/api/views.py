import os
from django.conf import settings
from django.http import JsonResponse

def get_gallery_images(request):
    gallery_path = os.path.join(settings.MEDIA_ROOT, 'gallery')
    image_urls = []

    # Walk through media/gallery and all subfolders
    for root, dirs, files in os.walk(gallery_path):
        for file in files:
            if file.lower().endswith(('.jpg', '.jpeg', '.png', '.gif')):
                # Create relative path from MEDIA_ROOT
                relative_path = os.path.relpath(os.path.join(root, file), settings.MEDIA_ROOT)
                
            
                url = request.build_absolute_uri(settings.MEDIA_URL + relative_path.replace("\\", "/"))
                image_urls.append(url)

    return JsonResponse({'images': image_urls})
