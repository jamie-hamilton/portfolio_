# Generated by Django 3.1.1 on 2020-09-18 16:11

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='About',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=200)),
                ('summary', models.TextField(help_text='Enter a brief description of the project', max_length=1000)),
                ('icon', models.CharField(blank=True, help_text='Enter icon class name', max_length=30, null=True)),
            ],
        ),
        migrations.CreateModel(
            name='Language',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(help_text='Enter the programming language', max_length=50, unique=True)),
                ('category', models.CharField(choices=[('FRO', 'Frontend'), ('BAC', 'Backend'), ('FRA', 'Framework'), ('OTH', 'Other')], help_text='Choose the primary category for the language', max_length=3)),
                ('logo_icon', models.CharField(blank=True, help_text='Enter icon class name', max_length=30, null=True)),
            ],
            options={
                'ordering': ['name'],
            },
        ),
        migrations.CreateModel(
            name='Project',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('priority', models.IntegerField(help_text='Lower numbers appear more prominently')),
                ('title', models.CharField(max_length=200, unique=True)),
                ('summary', models.TextField(help_text='Enter a brief description of the project', max_length=1000)),
            ],
            options={
                'ordering': ['priority', 'title'],
            },
        ),
        migrations.CreateModel(
            name='ProjectMedia',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('project_image', models.ImageField(blank=True, upload_to='project_images')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='media', to='api.project')),
            ],
        ),
        migrations.CreateModel(
            name='ProjectLanguage',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('percent_used', models.IntegerField(default=1, help_text='Enter a number between 1 and 100 to signify language usage')),
                ('language', models.ManyToManyField(help_text='Select the languages involved in the project', related_name='languages_used', to='api.Language')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='languages', to='api.project')),
            ],
        ),
        migrations.CreateModel(
            name='Link',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('to', models.CharField(help_text='Enter target location of link', max_length=30)),
                ('url', models.URLField(help_text='Enter link URL')),
                ('project', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='links', to='api.project')),
            ],
        ),
        migrations.AddConstraint(
            model_name='projectlanguage',
            constraint=models.CheckConstraint(check=models.Q(('percent_used__gte', 1), ('percent_used__lte', 100)), name='A value between 1 and 100 is required'),
        ),
    ]
