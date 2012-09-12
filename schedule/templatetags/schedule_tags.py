# -*- coding: utf8 -*-

from datetime import datetime
from django import template
from django.db.models import Max
from process.models import Term
from schedule.models import Groups, Classes

register = template.Library()

departments = [u'Компьютерные информационные технологии в проектировании',
               u'Управление в социально-экономических системах',
               u'Национальная безопасность']


@register.inclusion_tag('groups_list.html')
def groups_list(current_group=False, prefix="/for-students/schedule/"):
    now = datetime.now()
    groups_id = [i[0] for i in Classes.objects.filter(dateStart__lte=now.date(), dateEnd__gte=now.date()).values_list('group').order_by().distinct()]
    all_groups = Groups.objects.filter(id__in=groups_id)
    groups = []

    for id, department in enumerate(departments):
        x = []
        groups.append((department, x))
        last_year = int(all_groups.aggregate(Max('number'))['number__max'][0])

        for year in xrange(last_year):
            groups_by_year = []
            for group in all_groups.filter(number__regex='%s..%s/.' % (year + 1, id + 1)).order_by('number'):
                if current_group:
                    group.css_class = 'current'
                groups_by_year.append(group)
            x.append(groups_by_year)
    if current_group:
        level = 1
    else:
        level = 0
    return {'groups': groups, 'level': level, 'departments': departments, 'prefix': prefix}


@register.filter
def weeks_repeat(value):
    weeks = [u'1, 2', u'1', u'2']
    return weeks[value]
