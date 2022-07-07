from rest_framework import serializers
from .models import GolfCourse


class GolfCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = GolfCourse
        fields = "__all__"
