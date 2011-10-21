from django.db import models
from django.contrib.flatpages.models import FlatPage

# Create your models here.
class Page(FlatPage):
    show_in_menu = models.BooleanField(default = False)
    