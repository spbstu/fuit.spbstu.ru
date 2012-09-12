# -*- coding: utf8 -*-

from datetime import datetime

from schedule.models import Groups, Classes, Exams
from process.models import Term
from django.shortcuts import render
from django.template import RequestContext, Context


def groups_list(request):
    groups = Groups.objects.all()
    return render(request, 'base.html', {'content': groups})


def schedule(request, group, week=None):
    days = [
            {
            'day':'Пн',
            'classes':[]
        },
            {
            'day':u'Вт',
            'classes':[]
        },
            {
            'day':u'Ср',
            'classes':[]
        },
            {
            'day':u'Чт',
            'classes':[]
        },
            {
            'day':u'Пт',
            'classes':[]
        },
            {
            'day':u'Сб',
            'classes':[]
        },
            {
            'day':u'Вс',
            'classes':[]
        }
    ]

    now = datetime.now()

#    current_term = Term.objects.get(term_start__gt=now.date, holidays_start__lt=now.date)
    
    group_number = group.replace('-', '/')
    group_id = Groups.objects.get(number=group_number)
    classes = Classes.objects.select_related().filter(group=group_id, dateStart__lte=now.date, dateEnd__gte=now.date).order_by('time')

    if week == 'odd':
        week_exclude = 2
    elif week == 'even':
        week_exclude = 1
    else:
        week_exclude = False

    if week_exclude:
        classes = classes.exclude(reccurance=week_exclude)
    for group_class in classes:
        for i in (int(e) for e in group_class.day.split(',')):
            days[i - 1]['classes'].append(group_class)

    schedule.title = group_number

    return render(request, 'schedule.html',
        {'group': group_number,
        'days': days,
        'week': week,
        'group_id': group})


def exam(request, group):
    group_number = group.replace('-', '/')
    group_id = Groups.objects.get(number=group_number)
    all_exams = Exams.objects.filter(group=group_id).order_by('dateStart', 'time')
    exams = all_exams.exclude(eventType__title="Повторный экзамен")
    ext_exams = all_exams.filter(eventType__title="Повторный экзамен")
    exam.title = group_number
    return render(request, 'exams.html',
        {'exams': exams, 'ext_exams': ext_exams, 'group': group_number})
