from django.contrib import admin

# Register your models here.

from .models import Music, Video

@admin.register(Music)
class MusicAdmin(admin.ModelAdmin):
    list_display = ('title', 'artist', 'genre', 'duration', 'release_date')

@admin.register(Video)
class VideoAdmin(admin.ModelAdmin):
    list_display = ('title', 'director', 'genre', 'duration', 'release_date')