# Generated by Django 5.0.1 on 2024-01-18 02:05

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Task',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100)),
                ('date', models.DateField()),
                ('description', models.TextField()),
                ('state', models.CharField(max_length=50)),
                ('priority', models.CharField(max_length=50)),
            ],
        ),
    ]
