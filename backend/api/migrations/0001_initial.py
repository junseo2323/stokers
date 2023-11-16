# Generated by Django 4.2.2 on 2023-11-16 21:22

from django.conf import settings
import django.contrib.auth.models
import django.contrib.auth.validators
from django.db import migrations, models
import django.db.models.deletion
import django.utils.timezone


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='User',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('username', models.CharField(error_messages={'unique': 'A user with that username already exists.'}, help_text='Required. 150 characters or fewer. Letters, digits and @/./+/-/_ only.', max_length=150, unique=True, validators=[django.contrib.auth.validators.UnicodeUsernameValidator()], verbose_name='username')),
                ('last_name', models.CharField(blank=True, max_length=150, verbose_name='last name')),
                ('email', models.EmailField(blank=True, max_length=254, verbose_name='email address')),
                ('is_staff', models.BooleanField(default=False, help_text='Designates whether the user can log into this admin site.', verbose_name='staff status')),
                ('is_active', models.BooleanField(default=True, help_text='Designates whether this user should be treated as active. Unselect this instead of deleting accounts.', verbose_name='active')),
                ('date_joined', models.DateTimeField(default=django.utils.timezone.now, verbose_name='date joined')),
                ('phone', models.IntegerField()),
                ('status', models.IntegerField(default=0)),
                ('theme', models.CharField(max_length=256)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
            ],
            options={
                'verbose_name': 'user',
                'verbose_name_plural': 'users',
                'abstract': False,
            },
            managers=[
                ('objects', django.contrib.auth.models.UserManager()),
            ],
        ),
        migrations.CreateModel(
            name='Questlist',
            fields=[
                ('QuestId', models.IntegerField(primary_key=True, serialize=False)),
                ('Name', models.CharField(max_length=125)),
                ('Subname', models.CharField(max_length=256)),
                ('Level', models.IntegerField()),
                ('Type', models.IntegerField()),
                ('Detail', models.CharField(max_length=256)),
            ],
        ),
        migrations.CreateModel(
            name='Executionmission',
            fields=[
                ('QuestId', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='api.questlist')),
                ('ExecutionAnswer', models.BooleanField()),
            ],
        ),
        migrations.CreateModel(
            name='Quizmission',
            fields=[
                ('QuestId', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, primary_key=True, serialize=False, to='api.questlist')),
                ('Selection1', models.CharField(max_length=125)),
                ('SelectionDetail1', models.CharField(max_length=125)),
                ('Selection2', models.CharField(max_length=125)),
                ('SelectionDetail2', models.CharField(max_length=125)),
                ('Selection3', models.CharField(max_length=125)),
                ('SelectionDetail3', models.CharField(max_length=125)),
                ('Selection4', models.CharField(max_length=125)),
                ('SelectionDetail4', models.CharField(max_length=125)),
                ('QuizAnswer', models.IntegerField()),
            ],
        ),
        migrations.CreateModel(
            name='UserImage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('image', models.ImageField(upload_to='user_images/')),
                ('QuestId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.questlist')),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Textmission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('TextAnswer', models.CharField(max_length=256)),
                ('QuestId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.questlist')),
                ('username', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
        migrations.CreateModel(
            name='Imagemission',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('ImageAnswer', models.CharField(max_length=256)),
                ('QuestId', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='api.questlist')),
            ],
        ),
    ]
