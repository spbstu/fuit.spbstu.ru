#-*- coding: utf8 -*-
from django.contrib import admin
from django.db import models
from django import forms
from formWigets.numberSelection import NumbersSelectionWidget
from schedule.models import Exams, Classes, ClassRooms, EventTypes, Groups, Subjects, Teachers
from process.models import term_attr

class ClassesAdminForm(forms.ModelForm):
    class Meta:
        model = Classes

    dateStart = forms.DateField(initial = term_attr('term_start'),
            widget=admin.widgets.AdminDateWidget(attrs={'class' : 'hasDatepicker', 'size':
            '10'}))
    dateEnd = forms.DateField(initial = term_attr('record_week_start'),
            widget=admin.widgets.AdminDateWidget(attrs={'class' : 'hasDatepicker', 'size':
            '10'}))

    def __init__(self, *args, **kwargs):
        super(ClassesAdminForm, self).__init__(*args, **kwargs)
        print self.fields['dateStart'].widget
        print self.fields['dateEnd'].widget

class ClassesAdmin(admin.ModelAdmin):
    form = ClassesAdminForm
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
            models.CommaSeparatedIntegerField: {'widget':
                NumbersSelectionWidget([u'Пн', u'Вт', u'Ср', u'Чт', u'Пт',
                    u'Сб', u'Вс',], range(1, 8))},
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
