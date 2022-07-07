from django.urls import path

from . import views
from . import api

urlpatterns = [
    path("home/", views.home),
    path("api/golf-course/", api.GolfCourseViews.as_view()),
]
