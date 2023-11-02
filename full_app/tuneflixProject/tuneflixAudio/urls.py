from rest_framework.routers import DefaultRouter
from .views import MusicViewSet, VideoViewSet

router = DefaultRouter()
router.register(r'music', MusicViewSet)
router.register(r'videos', VideoViewSet)

urlpatterns = router.urls
