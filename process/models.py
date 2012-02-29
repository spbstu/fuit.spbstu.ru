# -*- coding: utf8 -*-

from django.db import models
import datetime

# Create your models here.
class Term(models.Model):
    term_start = models.DateField("Начало семестра")
    record_week_start = models.DateField("Зачетная неделя")
    exams_start = models.DateField("Начало сессии")
    additional_exams_start = models.DateField("Начало допсессии")
    holidays_star = models.DateField("Начало каникул")
    class Meta:
        verbose_name = 'Семестр'
        verbose_name_plural = 'Семестры'
        ordering = ['-term_start']


    def __unicode__(self):
        if self.term_start.month < 6:
            suffix = u'весенний семестр'
        else:
            suffix = u'осенний семестр'
        return u'%2s, %2s' % (self.term_start.year, suffix)

def term_attr(date_obj, date = datetime.date.today()):
    term = Term.objects.get(record_week_start__gt = date + datetime.timedelta(days=30))
    print dir(term)
    return term.__getattribute__(date_obj)
