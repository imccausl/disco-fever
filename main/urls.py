from django.urls import path, include
from rest_framework import routers
from . import views
from . import api

router = routers.DefaultRouter()
router.register(r"course", api.GolfCourseViews)
router.register(r"hole", api.GolfHoleViews)
router.register(r"card", api.GolfCardViews)
router.register(r"hole/score", api.HoleScoreViews)

urlpatterns = [
    path("home/", views.home),
    path("api/", include(router.urls)),
]
