# Generated by Django 4.0.4 on 2022-05-05 17:07

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0003_remove_golfhole_end_time_remove_golfhole_start_time_and_more'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='golfhole',
            options={'ordering': ['sort_order']},
        ),
        migrations.AddField(
            model_name='golfhole',
            name='sort_order',
            field=models.IntegerField(blank=True, db_index=True, default=0),
            preserve_default=False,
        ),
    ]
