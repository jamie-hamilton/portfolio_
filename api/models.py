from django.db import models
from django.urls import reverse


# Create your models here.
class Subject(models.Model):
    """Programming Subject, Language or Framework"""
    priority = models.IntegerField(
        help_text='Lower numbers appear more prominently.',
        blank=True,
        null=True,
    )
    name = models.CharField(
        unique=True,
        max_length=50,
        help_text='Enter the subject area (e.g. Python, Bootstrap or course)',
    )
    category = models.ManyToManyField(
        "Category",
        related_name='cat_subjects',
        help_text='Which category or categories is this subject related to? (optional)',
        blank=True,
    )
    logo_icon = models.CharField(
        max_length=30,
        help_text='Enter icon class name (optional).',
        null=True,
        blank=True,
    )
    class Meta:
        ordering = ['priority', 'name']

    def __str__(self):
        """Subject object string."""
        return self.name


class Project(models.Model):
    """Project Info"""
    priority = models.IntegerField(
        help_text='Must be unique - lower numbers appear more prominently.',
        unique=True,
    )
    title = models.CharField(
        max_length=200,
        unique=True,
    )
    summary = models.TextField(
        max_length=1000,
        help_text='Enter a brief description of the project.'
    )
    hobby_server = models.BooleanField(
        default=False,
        help_text="Is project currently running on hobby tier server?",
    )

    class Meta:
        ordering = ['priority', 'title']

    def get_absolute_url(self):
        """Returns URL to project."""
        return reverse('project-detail', args=[str(self.id)])

    def __str__(self):
        """Project object string."""
        return self.title


class ProjectLanguage(models.Model):
    """% usage of languages/frameworks for project"""
    project = models.ForeignKey(
        Project,
        related_name='languages',
        on_delete=models.CASCADE,
    )
    language = models.ForeignKey(
        Subject,
        related_name='languages_used',
        on_delete=models.SET_NULL,
        help_text='Select the language(s) involved in the project.',
        null=True,
        blank=True,
    )
    percent_used = models.IntegerField(
        null=True,
        blank=True,
        help_text='Enter a number between 1 and 100 to signify subject usage (optional).'
    )

    class Meta:
        constraints = [
            models.CheckConstraint(
                check=models.Q(percent_used__gte=1) & models.Q(percent_used__lte=100),
                name="A value between 1 and 100 is required.",
            )
        ]

    def __str__(self):
        """Project language object string."""
        return f'{self.project.title} languages.'


class ProjectMedia(models.Model):
    """Model for project photos"""
    media = models.OneToOneField(
        Project,
        related_name="media",
        null=True,
        blank=True,
        on_delete=models.CASCADE,
    )
    project_placeholder = models.FileField(
        upload_to='project_placeholders',
        blank=True
    )
    project_image = models.ImageField(
        upload_to='project_images',
        blank = True
    )


class Link(models.Model):
    """Model for project links"""
    project = models.ForeignKey(
        Project,
        related_name="links",
        on_delete=models.CASCADE,
    )
    to = models.CharField(
        max_length=30,
        help_text='Enter target location of link.',
    )
    icon = models.CharField(
        max_length=30,
        help_text='Enter icon class name for target site.',
        null=True,
        blank=True,
    )
    url = models.URLField(
        help_text='Enter link URL.',
    )

    def __str__(self):
        """Project links object string."""
        return f'Link to {self.to}.'


class Section(models.Model):
    """Model for section content"""
    title = models.CharField(max_length=200)
    summary = models.TextField(
        max_length=1000,
        help_text='Enter a brief intro to the section.'
    )


class Category(models.Model):
    """Model for About content"""
    name = models.CharField(
        unique=True,
        max_length=50,
        help_text='Enter the section name.',
    )
    summary = models.TextField(
        max_length=1000,
        help_text='Enter a brief description of the category (optional).',
        blank=True,
        null=True,
    )
    icon = models.CharField(
        max_length=30,
        help_text='Enter icon class name for this category (optional).',
        null=True,
        blank=True,
    )
    section = models.ManyToManyField(
        Section,
        related_name='categories',
        help_text='Which section(s) do you want to link this list to? (optional)',
        blank=True,
    )

    def __str__(self):
        return self.name
