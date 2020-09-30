from django.shortcuts import render

def index(request):
    """Render index.html template"""
    return render(request, 'frontend/index.html')
