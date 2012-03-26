# -*- coding: utf8 -*-
# Create your views here.

from django.shortcuts import render_to_response
from django.template import RequestContext

from fuit.staff.models import *


def contacts(request):
    persons = PersonToPosition.objects.all()
    departments = {}

    for person in persons:
        department_id = person.position.department.id
        if (department_id not in departments):
            departments[department_id] = {
                'title': person.position.department.title,
                'id': department_id,
                'persons': [],
                'subdepartments': {}
            }

        if (person.education_department):
            education_department_id = person.education_department.id
            if(education_department_id not in departments[department_id]['subdepartments']):
                departments[department_id]['subdepartments'][education_department_id] = {
                    'title': person.education_department.title,
                    'id': education_department_id,
                    'persons': []
                }
            departments[department_id]['subdepartments'][education_department_id]['persons'].append(person)
        else:
            departments[department_id]['persons'].append(person)

    return render_to_response('contacts.html', {
        'departments': departments
        },
        RequestContext(request))

contacts.title = u'Контактная информация'


def map():
    buildings = Buildings.objects.all()
    return buildings
