from django.shortcuts import render

from .models import Item

from datetime import datetime


def item_view(request):
    year = datetime.today().year
    items = Item.objects.all()
    context = {
        'year': year,
        'items': items,
    }
    return render(request, "App.html", context)
