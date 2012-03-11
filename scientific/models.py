# -*- coding: utf8 -*-

from django.db import models
import datetime

monthsTuple = (
        (u'1', u'Январь'),
        (u'2', u'Февраль'),
        (u'3', u'Март'),
        (u'4', u'Апрель'),
        (u'5', u'Май'),
        (u'6', u'Июнь'),
        (u'7', u'Июль'),
        (u'8', u'Август'),
        (u'9', u'Сентябрь'),
        (u'10', u'Октябрь'),
        (u'11', u'Ноябрь'),
        (u'12', u'Декабрь')
        )

conferenceTypes = (
        ('national', u'Всероссийская конференция'),
        ('local', u'Конференция СПбГПУ'),
        ('international', u'Международная конференция')
        )

class Conference(models.Model):
    title = models.CharField("Название конференции", max_length=512)
    conferenceType = models.CharField("Категория конференции",
            choices=conferenceTypes, max_length=32)
    startDate = models.DateField("Дата начала", blank=True)
    endDate = models.DateField("Дата окончания", blank=True)
    alternateDateMonth = models.CharField("Неточная дата", choices=monthsTuple,
            blank=True, max_length=2)
    alternateDateYear = models.IntegerField(default = datetime.datetime.now().year, blank=True)
    place = models.CharField("Место проведения", blank=True,
        help_text="Указывается только для всероссийских и международных конференций",
        max_length=32)
    organizers = models.TextField("Организатор")

    class Meta:
        verbose_name = u'Конференция'
        verbose_name_plural = u'Конференции'

    def __unicode__(self):
        return "%2s (%2s) - %2s" % (self.startDate, self.place, self.title)
