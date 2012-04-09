# -*- coding: utf8 -*-

from schedule.models import Groups, Classes, Exams
from django.shortcuts import render
from django.template import RequestContext, Context


def groups_list(request):
    groups = Groups.objects.all()
    return render(request, 'base.html', {'content': groups})


def schedule(request, group):
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
    group_number = group.replace('-', '/')
    group_id = Groups.objects.get(number=group_number)
    for group_class in Classes.objects.select_related().filter(group=group_id):
        for i in (int(e) for e in group_class.day.split(',')):
            days[i]['classes'].append(group_class)
    schedule.title = group_number
    return render(request, 'schedule.html',
        {'group': group_number, 'days': days})


def exam(request, group):
    group_number = group.replace('-', '/')
    group_id = Groups.objects.get(number=group_number)
    exams = Exams.objects.filter(group=group_id).order_by('dateStart', 'time')
    exam.title = group_number
    return render(request, 'exams.html',
        {'exams': exams, 'group': group_number})
