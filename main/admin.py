from django.contrib import admin
import main.models as models

admin.site.register(models.GolfCourse)
admin.site.register(models.GolfCard)
admin.site.register(models.GolfHole)
admin.site.register(models.HoleScore)
