from django.db import models
from django.contrib.auth.models import User

class Picture(models.Model):
    title = models.CharField(max_length=255, blank=True, null=True)
    image = models.ImageField(upload_to="pictures/") 
    uploaded_at = models.DateTimeField(auto_now_add=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # associate picture with user

    def __str__(self):
        return self.title or "Untitled"
