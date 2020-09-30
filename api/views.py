from rest_framework.generics import ListAPIView

from .models import Project, Section
from .serializers import ProjectSerializer, SectionSerializer

class SectionListView(ListAPIView):
    """List view for About page"""
    queryset = Section.objects.all()
    serializer_class = SectionSerializer

class ProjectListView(ListAPIView):
    """List view for Project Serializer"""
    queryset = Project.objects.all()
    serializer_class = ProjectSerializer
