# -*- coding: utf8 -*-
# Create your views here.

from django.shortcuts import render_to_response
from django.template import RequestContext

from fuit.staff.models import *


def contacts(request):
    persons_by_departments = {}
    departments = OfficialDepartments.objects.all()
    education_departments = EducationDepartments.objects.all()
    persons_raw = PersonToPosition.objects.all()

    for department in departments:
        persons_by_departments[department.id] = {
            'persons': [],
            'subdepartments': {}
            }

    for person in persons_raw:
        if person.education_department is not None:
            persons_by_departments[person.position.department.id]['subdepartments'][person.education_department.id] = person.education_department.title

        persons_by_departments[person.position.department.id]['persons'].append(person)
    print persons_by_departments

    return render_to_response('contacts.html', {
        'departments': departments,
        'education_departments': education_departments,
        'persons': persons_by_departments
        },
        RequestContext(request))

contacts.title = u'Контактная информация'
