from django.shortcuts import render
from django.core.paginator import Paginator
from .models import Item

from datetime import datetime


def item_view(request):
    year = datetime.today().year

    items = Item.objects.all()

    total_result = items.count()

    paginator = Paginator(items, 5)
    page_number = request.GET.get('page')
    page_obj = paginator.get_page(page_number)

    context = {
        'year': year,
        'items': items,
        'total_result': total_result,
        'page_obj': page_obj,
    }
    return render(request, "App.html", context)
