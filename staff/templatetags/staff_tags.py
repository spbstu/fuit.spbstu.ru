#-*- coding: utf8 -*-

from django import template

from staff.models import EducationDepartments

register = template.Library()

@register.inclusion_tag('education_departments_list.html', takes_context=True)
def educationDepartments(context):
    departments = EducationDepartments.objects.all()
    return {'departments': departments}