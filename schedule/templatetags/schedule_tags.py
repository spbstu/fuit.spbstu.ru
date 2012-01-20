# -*- coding: utf8 -*-

from django import template
from schedule.models import Subjects, Groups

register = template.Library()

departments = [r'Компьютерные информационных технологии в проектировании',
               r'Управление в социально-экономических системах',
               r'Национальная безопасность']

@register.inclusion_tag('groups_list.html')
def groups_list(current_group=False):
    groups = {}
    for id, department in enumerate(departments):
        groups[department] = []
        for year in xrange(1,6):
            groups_by_year = {}
            for group in Groups.objects.filter(number__regex='%s..%s/.' % (year, id+1)):
                if current_group:
                    group.css_class = 'current'
                groups_by_year[group.number.replace('/', '-')] = group
            groups[department].append(groups_by_year)
    if current_group:
        level = 1
    else:
        level = 0
    return {'groups': groups, 'level': level}

@register.filter
def weeks_repeat(value):
    weeks = [u'1, 2',u'1',u'2']
    return weeks[value]