from django.contrib import admin
import main.models as models
from orderable.admin import OrderableTabularInline


class GolfHoleInline(OrderableTabularInline):
    model = models.GolfHole


class GolfCourseAdmin(admin.ModelAdmin):
    inlines = [GolfHoleInline]


admin.site.register(models.GolfCourse, GolfCourseAdmin)
admin.site.register(models.GolfCard)
admin.site.register(models.GolfHole)
admin.site.register(models.HoleScore)
