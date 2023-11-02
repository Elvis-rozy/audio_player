from django.db import models

# Create your models here.

class Music(models.Model):
    title = models.CharField(max_length=100)
    artist = models.CharField(max_length=100)
    genre = models.CharField(max_length=50)  # Add genre field
    duration = models.PositiveIntegerField()  # Add duration 
    release_date = models.DateField()  # Add release date
    audio_file = models.FileField(upload_to='music/')
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)  # Optional thumbnail
    upload_date = models.DateTimeField(auto_now_add=True)  # Date of upload

    def __str__(self):
        return self.title

class Video(models.Model):
    title = models.CharField(max_length=100)
    director = models.CharField(max_length=100)
    genre = models.CharField(max_length=50)  # Add genre field
    duration = models.PositiveIntegerField()  # Add duration in seconds
    release_date = models.DateField()  # Add release date
    video_file = models.FileField(upload_to='videos/')
    thumbnail = models.ImageField(upload_to='thumbnails/', blank=True, null=True)  # Optional thumbnail
    upload_date = models.DateTimeField(auto_now_add=True)  # Date of upload

    def __str__(self):
        return self.title