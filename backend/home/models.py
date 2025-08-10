from django.db import models

class LandingContent(models.Model):
    title = models.CharField(max_length=255)
    subtitle = models.CharField(max_length=255)
    description = models.TextField()
    image = models.ImageField(upload_to='landing_images/')

    def __str__(self):
        return self.title


class Vision(models.Model):
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='vision_images/')

    def __str__(self):
        return self.description