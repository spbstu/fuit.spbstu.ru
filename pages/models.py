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


class MenuItem(models.Model):
    url = models.CharField('Адрес ссылки', max_length=100, help_text='Ссылка, например /about/ или http://www.spbstu.ru/')
    title = models.CharField('Заголовок пункта меню', max_length=100)
    order = models.IntegerField('Порядок вывода', null=True, blank=True)

    class Meta:
        verbose_name = 'Пункт меню'
        verbose_name_plural = 'Пункты меню'

    def __unicode__(self):
        return "%s -> %s" % (self.title, self.url)


class IndexImages(models.Model):
    title = models.CharField('Заголовок', max_length=64, null=True, blank=True)
    image = models.ImageField("Картинка",
        upload_to="files/index_images/")
    text = models.TextField('Текст', null=True, blank=True)
    text_position = models.CharField('Расположение текста',
        max_length=10, default='left', choices=(
            ('left', 'Слева'),
            ('right', 'Справа'),
            ('bottom', 'Снизу')
            ))
    is_active = models.BooleanField('Активна', default=True)

    class Meta:
        verbose_name = 'Картинка на главной'
        verbose_name_plural = 'Картинки на главной'

    def __unicode__(self):
        return self.title or u'Без названия'

    def show_text(self):
        return bool(self.title) or bool(self.text)
