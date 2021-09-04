from django.shortcuts import render

from .models import Item

from datetime import datetime


def item_view(request):
    year = datetime.today().year
    context = {
        'year': year,
    }
    return render(request, "App.html", context)
