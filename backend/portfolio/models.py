from django.db import models
from cloudinary.models import CloudinaryField

class Portfolio(models.Model):

    title = models.CharField(max_length=100)

    image = CloudinaryField('image')
    category = models.CharField(
        max_length=50,
        default="Wedding"
    )

    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.title