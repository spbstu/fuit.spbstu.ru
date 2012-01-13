# -*- coding: utf8 -*-
from django.db import models
import datetime

# Create your models here.
class Groups(models.Model):
    number = models.CharField('Номер группы', max_length = 8)
    class Meta:
        verbose_name = u'Группа'
        verbose_name_plural = u'Группы'
    def __unicode__(self):
        return self.number

class EventTypes(models.Model):
    title = models.CharField('Тип занятия', max_length=24)
    class  Meta:
        verbose_name = u'Тип занятия'
        verbose_name_plural = u'Типы занятий'
    def __unicode__(self):
        return self.title
    
class Subjects(models.Model):
    title = models.CharField('Название', max_length = 128)
    class Meta:
        verbose_name = u'Предмет'
        verbose_name_plural = u'Предметы'
    def __unicode__(self):
        return self.title

class Teachers(models.Model):
    fullName = models.CharField('ФИО', max_length = 128)
    class Meta:
        verbose_name = u'Преподаватель'
        verbose_name_plural = u'Преподаватели'
    def __unicode__(self):
        return self.fullName

class ClassRooms(models.Model):
    address = models.CharField('Номер аудитории', max_length = 128)
    class Meta:
        verbose_name = u'Аудитория'
        verbose_name_plural = u'Аудитории'
    def __unicode__(self):
        return self.address

class Meeting(models.Model):
    dateStart = models.DateField('Дата начала')
    time = models.TimeField('Время начала')
    group = models.ForeignKey('Groups', verbose_name=u'Группа')
    eventType = models.ForeignKey('EventTypes', verbose_name=u'Тип занятия')
    subject = models.ForeignKey('Subjects')
    teacher = models.ForeignKey('Teachers')
    classRoom = models.ForeignKey('ClassRooms')

class Classes(Meeting):
    dateEnd = models.DateField('Дата окончания')
    day = models.CommaSeparatedIntegerField('День недели', max_length = 10)
    reccurance = models.IntegerField('Неделя', choices=[(0, 'Обе'), (1, 'Четная'), (2, 'Нечетная')])
    class Meta:
        verbose_name = u'Занятие'
        verbose_name_plural = u'Занятия'
        ordering = ['group', 'day']
    def __unicode__(self):
        return "%2s - %2s (%2s)" % (self.group, self.subject, self.day)

class Exams(Meeting):
    class Meta:
        verbose_name = u'Экзамен'
        verbose_name_plural = u'Экзамены'
    def __unicode__(self):
        return "%2s - %2s (%2s)" % (self.group, self.subject, self.dateStart)