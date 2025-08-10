from django.db import models

# Create your models here.
class Program(models.Model):
    title = models.CharField(max_length=200)
    description = models.CharField(max_length=255)
    image = models.ImageField(upload_to='program_images/', default='img')

    def __str__(self):
        return self.title
    
