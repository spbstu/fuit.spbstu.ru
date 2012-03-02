# -*- coding: utf8 -*-

from django import template
from process.models import Term
import datetime
from django.core.exceptions import ObjectDoesNotExist

register = template.Library()

@register.inclusion_tag('process_week.html')
def process_week(date = datetime.date.today()):

    try:
        term = Term.objects.get(term_start__lt = date, holidays_start__gt = date)
        if date < term.record_week_start:
            if (date.isocalendar()[1] - term.term_start.isocalendar()[1]) % 2:
                week_name = u'Четная неделя'
            else:
                week_name = u'Нечетная неделя'
        elif date < term.exams_start:
            week_name = u'Зачетная неделя'
        elif date < term.additional_exams_start:
            week_name = u'Экзаменационная сессия'
        else:
            week_name = u'Допсессия'
    except ObjectDoesNotExist:
        term = null
        week_name = u'Каникулы'

    return {'week_name': week_name, 'term': None, 'now':
            date.strftime('%d.%m.%Y')}
