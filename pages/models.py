# -*- coding: utf8 -*- 
from django.db import models
from django.contrib.flatpages.models import FlatPage

# Create your models here.
class Page(FlatPage):
    show_in_menu = models.BooleanField(default = False)
    show_sidebar = models.BooleanField(default = False)
    class Meta:
        verbose_name = u'Страница'
        verbose_name_plural = u'Страницы'
    