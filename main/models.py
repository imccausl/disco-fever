from django.db import models


class GolfCourse(models.Model):
    name = models.CharField(max_length=1000)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lng = models.DecimalField(max_digits=11, decimal_places=8)


class GolfCard(models.Model):
    course = models.ForeignKey(GolfCourse, on_delete=models.CASCADE)
    invite_code = models.CharField(max_length=5)
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


class GolfHole(models.Model):
    course = models.ForeignKey(GolfCourse, on_delete=models.CASCADE)
    hole_number = models.IntegerField()
    hole_name = models.CharField(max_length=100)
    par = models.IntegerField()
    physical_length = models.IntegerField()
    start_time = models.DateTimeField()
    end_time = models.DateTimeField()


class HoleScore(models.Model):
    card = models.ForeignKey(GolfCard, on_delete=models.CASCADE)
    hole = models.ForeignKey(GolfHole, on_delete=models.CASCADE)
    stroke_count = models.IntegerField()
