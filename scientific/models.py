# -*- coding: utf8 -*-

from django.db import models
import datetime

monthsTuple = (
        (1, u'Январь'),
        (2, u'Февраль'),
        (3, u'Март'),
        (4, u'Апрель'),
        (5, u'Май'),
        (6, u'Июнь'),
        (7, u'Июль'),
        (8, u'Август'),
        (9, u'Сентябрь'),
        (10, u'Октябрь'),
        (11, u'Ноябрь'),
        (12, u'Декабрь')
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
    alternateDateMonth = models.IntegerField("Неточная дата", choices=monthsTuple,
            blank=True, null=True)
    alternateDateYear = models.IntegerField(blank=True)
    place = models.CharField("Место проведения", blank=True,
        help_text="Указывается только для всероссийских и международных конференций",
        max_length=32)
    organizers = models.TextField("Организатор")

    class Meta:
        verbose_name = u'Конференция'
        verbose_name_plural = u'Конференции'

    def __unicode__(self):
        return "%2s (%2s) - %2s" % (self.startDate, self.place, self.title)
