from rest_framework import viewsets
from .serializers import (
    GolfCourseSerializer,
    GolfCardSerializer,
    GolfHoleSerializer,
    HoleScoreSerializer,
)
from .models import GolfCourse, GolfHole, GolfCard, HoleScore


class GolfCourseViews(viewsets.ModelViewSet):
    serializer_class = GolfCourseSerializer
    queryset = GolfCourse.objects.all()


class GolfHoleViews(viewsets.ModelViewSet):
    serializer_class = GolfHoleSerializer
    queryset = GolfHole.objects.all()


class GolfCardViews(viewsets.ModelViewSet):
    serializer_class = GolfCardSerializer
    queryset = GolfCard.objects.all()


class HoleScoreViews(viewsets.ModelViewSet):
    serializer_class = HoleScoreSerializer
    queryset = HoleScore.objects.all()
