# Generated by Django 4.2.2 on 2023-11-15 08:16

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('api', '0002_alter_textmission_questid'),
    ]

    operations = [
        migrations.AlterField(
            model_name='textmission',
            name='QuestId',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.questlist'),
        ),
    ]