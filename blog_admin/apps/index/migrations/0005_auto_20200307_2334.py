# Generated by Django 2.2.3 on 2020-03-07 23:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0004_auto_20200303_1509'),
    ]

    operations = [
        migrations.AddField(
            model_name='blog',
            name='beforeurl',
            field=models.CharField(blank=True, max_length=300, null=True),
        ),
        migrations.AddField(
            model_name='blog',
            name='yuanchuang',
            field=models.IntegerField(default=0),
        ),
    ]
