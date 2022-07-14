from rest_framework import serializers
from .models import GolfCourse, GolfHole, GolfCard, HoleScore


class GolfCourseSerializer(serializers.ModelSerializer):
    class Meta:
        model = GolfCourse
        fields = "__all__"


class GolfHoleSerializer(serializers.ModelSerializer):
    class Meta:
        model = GolfHole
        fields = "__all__"


class GolfCardSerializer(serializers.ModelSerializer):
    class Meta:
        model = GolfCard
        fields = "__all__"


class HoleScoreSerializer(serializers.ModelSerializer):
    class Meta:
        model = HoleScore
        fields = "__all__"
