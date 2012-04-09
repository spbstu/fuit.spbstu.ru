#-*- coding: utf8 -*-

from django import template

from staff.models import EducationDepartments, OfficialDepartments, PersonToPosition

register = template.Library()


@register.inclusion_tag('education_departments_list.html', takes_context=True)
def educationDepartments(context):
    departments = EducationDepartments.objects.all()
    return {'departments': departments}


@register.inclusion_tag('core_contacts.html', takes_context=True)
def coreContacts(context):
    departments = []
    deansoffice = OfficialDepartments.objects.get(title='Деканат')
    departments.append({
        'title': u'Деканат',
        'longtitle': u'Деканат Факультета управления и информационных технологий СПбГТУ',
        'department': deansoffice,
        'persons': []
    })
    for title in ['Декан факультета', 'Заместители декана']:
        do_persons_departments = OfficialDepartments.objects.get(title=title)
        do_positions = do_persons_departments.department_positions.all()
        do_persons = PersonToPosition.objects.filter(position__in=do_positions)
        for person in do_persons:
            departments[0]['persons'].append(person)

    edu_departments = EducationDepartments.objects.order_by('index')

    for department in edu_departments:
        departments.append({
            'title': u"Кафедра %s" % (department.abbr),
            'longtitle': u"Кафедра «%s»" % (department.title),
            'department': department,
            'persons': PersonToPosition.objects.filter(education_department=department.id)
        })

    return {'departments': departments}
