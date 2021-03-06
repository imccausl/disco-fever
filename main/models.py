from django.db import models
from orderable.models import Orderable
from  django.contrib.auth.models import User

class GolfCourse(models.Model):
    name = models.CharField(max_length=1000)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lng = models.DecimalField(max_digits=11, decimal_places=8)

    def __str__(self):
        return self.name


class GolfCard(models.Model):
    course = models.ForeignKey(GolfCourse, on_delete=models.CASCADE)
    invite_code = models.CharField(max_length=5)
    start_time = models.DateTimeField(auto_now_add=True)
    end_time = models.DateTimeField(null=True, blank=True)

    def __str__(self):
        return "{}: {}".format(self.course, self.invite_code)


class GolfHole(Orderable):
    course = models.ForeignKey(GolfCourse, on_delete=models.CASCADE)
    hole_name = models.CharField(max_length=100)
    par = models.IntegerField()
    physical_length = models.IntegerField(null=True)
    lat = models.DecimalField(max_digits=10, decimal_places=8, null=True)
    lng = models.DecimalField(max_digits=11, decimal_places=8, null=True)

    def __str__(self):
        return "{} ({})".format(self.hole_name, self.course)


class HoleScore(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    card = models.ForeignKey(GolfCard, on_delete=models.CASCADE)
    hole = models.ForeignKey(GolfHole, on_delete=models.CASCADE)
    stroke_count = models.IntegerField()

    def __str__(self):
        return "{} Hole {}".format(self.card, self.hole)
