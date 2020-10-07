from django.contrib import admin
from .models import (
    Subject,
    ProjectLanguage,
    ProjectMedia,
    Link,
    Project,
    Category,
    Section
)


class ProjectLanguageInline(admin.StackedInline):
    """Display project languages inline"""
    model = ProjectLanguage
    # Override get_extra method
    def get_extra(self, request, obj=None, **kwargs):
        # Return 1 field by default and 0 for projects with pre-existing objects
        extra = 1
        if obj:
            return extra - 1
        return extra


class LinkInline(admin.StackedInline):
    """Display project links inline"""
    model = Link
    # Override get_extra method
    def get_extra(self, request, obj=None, **kwargs):
        extra = 1
        if obj:
            return extra - 1
        return extra

class ProjectMediaInline(admin.TabularInline):
    """Display project links inline"""
    model = ProjectMedia
    # Override get_extra method
    def get_extra(self, request, obj=None, **kwargs):
        extra = 1
        if obj:
            return extra - 1
        return extra

class ProjectAdmin(admin.ModelAdmin):
    """Project custom admin"""
    model = Project
    fields = [
        'priority',
        'title',
        'summary',
        'hobby_server',
    ]
    inlines = [
        ProjectMediaInline,
        ProjectLanguageInline,
        LinkInline,
    ]

class CategoryInline(admin.StackedInline):
    #Display category inline
    model = Category.section.through
    # Override get_extra method
    def get_extra(self, request, obj=None, **kwargs):
        extra = 1
        if obj:
            return extra - 1
        return extra


class SectionAdmin(admin.ModelAdmin):
    """Section custom admin"""
    model = Section
    fields = [
        'title',
        'summary',
    ]
    inlines = [
        CategoryInline
    ]

admin.site.register(Subject)
admin.site.register(Category)
admin.site.register(ProjectMedia)
admin.site.register(Section, SectionAdmin)
admin.site.register(Project, ProjectAdmin)
