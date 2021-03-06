#-*- coding: utf8 -*-
import datetime

from django.db import models


class DocType(models.Model):
    title = models.CharField('Название', max_length=64)
    title_plural = models.CharField('Название (множ.)', max_length=64)
    weight = models.IntegerField('Порядок вывода', null=True, blank=True)

    class Meta:
        verbose_name = 'Тип документа'
        verbose_name_plural = 'Типы документов'

    def __unicode__(self):
        return self.title


class Document(models.Model):
    title = models.CharField('Название', max_length=64)
    date = models.DateField('Дата публикации', default=datetime.date.today)
    attachment = models.FileField("Файл",
        upload_to='files/attachments/profburo/')
    doc_type = models.ForeignKey(DocType, verbose_name='Тип документа')

    class Meta:
        verbose_name = 'Документ'
        verbose_name_plural = 'Документы'

    def __unicode__(self):
        return u'%s (%s)' % (self.title, self.date)


class Event(models.Model):
    title = models.CharField('Название', max_length=128)
    date = models.DateField('Дата проведения', default=datetime.date.today)
    description = models.TextField('Краткое описание')
    text = models.TextField('Описание', null=True, blank=True)
    is_public = models.BooleanField('Опубликовано', default=False)

    class Meta:
        verbose_name = 'Мероприятие'
        verbose_name_plural = 'Мероприятия'

    def __unicode__(self):
        return self.title
