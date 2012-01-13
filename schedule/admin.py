# -*- coding: utf8 -*-
from django.contrib import admin
from django.db import models
#from django import forms
from formWigets.numberSelection import NumbersSelectionWidget
from schedule.models import Exams, Classes, ClassRooms, EventTypes, Groups, Subjects, Teachers

class ClassesAdmin(admin.ModelAdmin):
    fieldsets = (
        (None, {
            'fields': ('group',)
        }),
        (u'Дата и время', {
            'fields': ('dateStart', 'dateEnd', 'time', 'reccurance', 'day')
        }),
        ('Занятие', {
            'fields': ('subject', 'eventType', 'teacher', 'classRoom')
        })
    )
    formfield_overrides = {
            models.CommaSeparatedIntegerField: {'widget': NumbersSelectionWidget([u'Пн', u'Вт', u'Ср', u'Чт', u'Пт', u'Сб', u'Вс',], range(1, 8))},
        }
    list_display = ('group', 'dateStart', 'time', 'reccurance', 'subject')
    list_display_links = ('subject',)
    list_filter = ('group', 'day', 'reccurance')

admin.site.register(ClassRooms)
admin.site.register(EventTypes)
admin.site.register(Groups)
admin.site.register(Subjects)
admin.site.register(Teachers)
admin.site.register(Exams)
admin.site.register(Classes, ClassesAdmin)

#admin.site.register(Teachers)
