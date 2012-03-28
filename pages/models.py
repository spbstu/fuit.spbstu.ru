# -*- coding: utf8 -*-
from django.db import models
from django.contrib.flatpages.models import FlatPage


class Page(FlatPage):
    show_in_menu = models.BooleanField(default=False)
    show_sidebar = models.BooleanField(default=False)

    class Meta:
        verbose_name = u'Страница'
        verbose_name_plural = u'Страницы'


class Attachment(models.Model):
    title = models.CharField('Название', max_length=128)
    attachment = models.FileField("Файл",
        upload_to='files/attachments/')

    class Meta:
        verbose_name = 'Вложение'
        verbose_name_plural = 'Вложения'

    def __unicode__(self):
        return self.title


class PageAttachments(models.Model):
    page = models.ForeignKey(Page, verbose_name='Станица')
    attachment = models.ForeignKey(Attachment, verbose_name='Файл')

    class Meta:
        verbose_name = 'Вложение'
        verbose_name_plural = 'Вложения на страницы'

    def __unicode__(self):
        return u'«%2s» на странице «%2s»' % (self.attachment.title,
            self.page.title)
