# Generated by Django 4.0.4 on 2022-05-05 17:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0002_golfcard_golfhole_holescore'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='golfhole',
            name='end_time',
        ),
        migrations.RemoveField(
            model_name='golfhole',
            name='start_time',
        ),
        migrations.AddField(
            model_name='golfhole',
            name='lat',
            field=models.DecimalField(decimal_places=8, max_digits=10, null=True),
        ),
        migrations.AddField(
            model_name='golfhole',
            name='lng',
            field=models.DecimalField(decimal_places=8, max_digits=11, null=True),
        ),
        migrations.AlterField(
            model_name='golfcard',
            name='end_time',
            field=models.DateTimeField(null=True),
        ),
        migrations.AlterField(
            model_name='golfcard',
            name='start_time',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='golfhole',
            name='physical_length',
            field=models.IntegerField(null=True),
        ),
    ]
