# -*- coding: utf-8 -*-

from django.db import models
from django import forms#
from tinymce.widgets import TinyMCE
from tinymce import models as tinymce_models



# Create your models here.
class GlobalNews(models.Model):
    title = models.CharField(max_length=200, verbose_name='Заголовок новости')
    message = tinymce_models.HTMLField(verbose_name='Текст новости')
    publishdate = models.DateField(verbose_name='Дата публикации')
    class Meta:
        verbose_name_plural = u"Глобальные новости"
        
class DeansNews(models.Model):
    title = models.CharField(max_length=200, verbose_name='Заголовок новости')
    message = tinymce_models.HTMLField(verbose_name='Текст новости')
    publishdate = models.DateField(verbose_name='Дата публикации')
    class Meta:
        verbose_name_plural = u"Объявления деканата"
        
class Pages(models.Model):
    url = models.CharField(max_length=200, verbose_name='URL страницы')
    title = models.CharField(max_length=200, verbose_name='Название страницы')
    def __unicode__(self):
        return '%s %s' % (self.title, self.url)


class PageContent(models.Model):
    content = tinymce_models.HTMLField(verbose_name='Содержимое страницы')
    page = models.ForeignKey(Pages)
    def __unicode__(self):
       return '%s %s' % (self.page.title, self.page.url)
