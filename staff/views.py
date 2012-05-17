# -*- coding: utf8 -*-
# Create your views here.

from django.shortcuts import render

from staff.models import *

y_api_keys = {
    '127.0.0.1': 'ANMapE0BAAAA5B7KVwIAPinBel3QZEqldnD4EL3eGYWw8bIAAAAAAAAAAAD4tiWdLrZ-AvxxqCt8aG9YO97tfQ==',
    'fuit.loc': 'ANMapE0BAAAA5B7KVwIAPinBel3QZEqldnD4EL3eGYWw8bIAAAAAAAAAAAD4tiWdLrZ-AvxxqCt8aG9YO97tfQ==',
    'fuit.avalon.ru': 'AJY0pE0BAAAABoK8WQMAjlOmNwkBzs7pyidk1voaV4UFNKkAAAAAAAAAAABYafXs14VRNaWG94-wf3RlIRNZAA==',
    's.fuit.avalon.ru': 'AJY0pE0BAAAABoK8WQMAjlOmNwkBzs7pyidk1voaV4UFNKkAAAAAAAAAAABYafXs14VRNaWG94-wf3RlIRNZAA==',
    'fuit.brnv.ru': 'AAcapE0BAAAABJRxSgMAv7TPc7f_S9fpuMSpSfS30DhNRzIAAAAAAAAAAAAH1gByuXXB9auEqX45sqc-9-Au8w==',
    'fuit.spbstu.ru': 'ABI1pE0BAAAAU4o8EgMAAUi5I2QOLOoYkn9kYHoFAJEIh1kAAAAAAAAAAACEiTp4X_tKPusuEW9TuHZKX-RsQA==',
    'www.fuit.spbstu.ru': 'ABI1pE0BAAAAU4o8EgMAAUi5I2QOLOoYkn9kYHoFAJEIh1kAAAAAAAAAAACEiTp4X_tKPusuEW9TuHZKX-RsQA==',
}


def get_map(request):
    try:
        host, port = request.META['HTTP_HOST'].split(':')
    except:
        host = request.META['SERVER_NAME']
    api_key = y_api_keys[host]
    buildings = Buildings.objects.all()

    return {
        'buildings': buildings,
        'api_key': api_key
    }


def contacts(request):
    map_dict = get_map(request)
    persons = PersonToPosition.objects.order_by('position__order')
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
            education_department_id = person.education_department.index
            if(education_department_id not in departments[department_id]['subdepartments']):
                departments[department_id]['subdepartments'][education_department_id] = {
                    'title': person.education_department.title,
                    'id': education_department_id,
                    'persons': []
                }
            departments[department_id]['subdepartments'][education_department_id]['persons'].append(person)
        else:
            departments[department_id]['persons'].append(person)

    for d_id, d in departments.iteritems():
        if d['subdepartments']:
            l = d['subdepartments'].keys()
            l.sort()
            d['subdepartments_keys'] = l

    return render(request, 'contacts.html', {
        'departments': departments,
        'map': map_dict
        })

contacts.title = u'Контактная информация'


def departments(request):
    departments = EducationDepartments.objects.all()

    return render(request, 'about/departments.html', {
        'departments': departments
        })

departments.title = u'Выпускающие кафедры'
