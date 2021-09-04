from Main.views import item_view
from django.urls import path

urlpatterns = [
    path('', item_view, name='page'),
]