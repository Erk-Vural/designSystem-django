from django.db import models


# Create your models here.
class Item(models.Model):
    icon = models.CharField(max_length=64)
    title = models.CharField(max_length=64)
    description = models.CharField(max_length=64)

    def __str__(self):
        return self.title
