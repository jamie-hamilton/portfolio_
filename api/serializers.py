from rest_framework import serializers
from .models import (
    Project,
    Subject,
    ProjectLanguage,
    ProjectMedia,
    Link,
    Section,
    Category
)


class SubjectSerializer(serializers.ModelSerializer):
    """Serialize Subject model"""
    class Meta:
        model = Subject
        fields = [
            'id',
            'name',
            'logo_icon',
        ]


class ProjectLanguageSerializer(serializers.ModelSerializer):
    """Serialize ProjectLanguage model"""
    language = SubjectSerializer(read_only=True)
    class Meta:
        model = ProjectLanguage
        fields = ['percent_used', 'language']


class ProjectMediaSerializer(serializers.ModelSerializer):
    """Serialize ProjectMedia model"""
    class Meta:
        model = ProjectMedia
        fields = [
            'id',
            'project_placeholder',
            'project_image',
        ]

class LinkSerializer(serializers.ModelSerializer):
    """Serialize Link model"""
    class Meta:
        model = Link
        fields = [
            'id',
            'to',
            'icon',
            'url',
        ]

class ProjectSerializer(serializers.ModelSerializer):
    """Serialize Project model"""
    languages = ProjectLanguageSerializer(many=True, read_only=True)
    media =  ProjectMediaSerializer(read_only=True)
    links = LinkSerializer(many=True, read_only=True)
    class Meta:
        model = Project
        fields = [
            'id',
            'priority',
            'title',
            'summary',
            'languages',
            'media',
            'links',
            'hobby_server',
        ]


class CategorySerializer(serializers.ModelSerializer):
    """Serialize Category model"""
    cat_subjects = SubjectSerializer(many=True, read_only=True)
    class Meta:
        model = Category
        fields = [
            'id',
            'name',
            'summary',
            'icon',
            'cat_subjects',
        ]


class SectionSerializer(serializers.ModelSerializer):
    """Serialize Section model"""
    categories = CategorySerializer(many=True, read_only=True)
    class Meta:
        model = Section
        fields = [
            'id',
            'title',
            'summary',
            'categories',
        ]
