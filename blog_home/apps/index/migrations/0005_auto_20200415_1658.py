# Generated by Django 2.2.3 on 2020-04-15 16:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('index', '0004_auto_20200415_1256'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='users',
            name='birth',
        ),
        migrations.RemoveField(
            model_name='users',
            name='company',
        ),
        migrations.RemoveField(
            model_name='users',
            name='havenoticed',
        ),
        migrations.RemoveField(
            model_name='users',
            name='industry',
        ),
        migrations.RemoveField(
            model_name='users',
            name='introduce',
        ),
        migrations.RemoveField(
            model_name='users',
            name='job',
        ),
        migrations.RemoveField(
            model_name='users',
            name='school',
        ),
        migrations.AlterField(
            model_name='users',
            name='fans',
            field=models.TextField(default=0),
        ),
        migrations.AlterField(
            model_name='users',
            name='notice',
            field=models.TextField(default=0),
        ),
    ]
