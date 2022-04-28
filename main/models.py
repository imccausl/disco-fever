from django.db import models


class GolfCourse(models.Model):
    name = models.CharField(max_length=1000)
    lat = models.DecimalField(max_digits=10, decimal_places=8)
    lng = models.DecimalField(max_digits=11, decimal_places=8)
