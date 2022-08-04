from django.http import JsonResponse

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


def get_token(request):
    """
    Return the CSRF token that Django has created for this session.
    It's intended to be used in NextJs to run a successful POST request.

        Returns:
                csrfToken (str): The CSRF token
    """
    from django.middleware.csrf import get_token

    return JsonResponse({"csrfToken": get_token(request)})
