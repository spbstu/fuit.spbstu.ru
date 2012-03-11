# -*- coding: utf8 -*-

# Create your views here.

from scientific.models import Conference, monthsTuple
from django.shortcuts import render
import datetime


def get_confernces_by_type(conference_type, year):
    today = datetime.datetime.now().date()
    today_month = datetime.datetime.now().month

    return {
        'future': sorted(
            list(Conference.objects.filter(conferenceType=conference_type, startDate__year=year, endDate__gte=today)) +
            list(Conference.objects.filter(conferenceType=conference_type, alternateDateYear=year, alternateDateMonth__gte=today_month)),
            key=lambda x: x.alternateDateMonth and x.alternateDateMonth or x.startDate.month
            ),
        'past': sorted(
            list(Conference.objects.filter(conferenceType=conference_type, startDate__year=year, endDate__lt=today)) +
            list(Conference.objects.filter(conferenceType=conference_type, alternateDateYear=year, alternateDateMonth__lt=today_month)),
            key=lambda x: x.alternateDateMonth and x.alternateDateMonth or x.startDate.month
            )
    }


def conferences_archive(request, year):
    conferences = {
        'local': get_confernces_by_type('local', year),
        'national': get_confernces_by_type('national', year),
        'international': get_confernces_by_type('international', year)
    }

    conferences_archive.title = str(year)

    return render(request, 'conference.html', {'conferences': conferences,
        'year': year,
        'month': monthsTuple}
        )


def conferences_active(request):
    year = datetime.datetime.now().year
    conferences = {
        'local': get_confernces_by_type('local', year),
        'national': get_confernces_by_type('national', year),
        'international': get_confernces_by_type('international', year)
    }

    conferences_active.title = u'Научные конференции'

    return render(request, 'conference.html', {'conferences': conferences,
        'year': year,
        'month': monthsTuple}
        )
