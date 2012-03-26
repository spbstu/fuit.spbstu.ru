# -*- coding: utf8 -*-

# Create your views here.

from scientific.models import Conference, monthsTuple, Grant
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


def grants_all(request):
    all_grants = Grant.objects.order_by('year')
    grants = {}
    for grant in all_grants:
        if grant.year not in grants:
            grants[grant.year] = []
        grants[grant.year].append(grant)

    return render(request, 'grants_list.html',
        {'grants': grants, 'title': grants_all.title})

grants_all.title = 'Конкурсы и гранты'


def grants_by_year(request, year):
    grants = {}
    grants[year] = Grant.objects.filter(year=year)
    grants_by_year.title = year
    return render(request, 'grants_list.html',
        {
            'grants': grants,
            'title': u'Конкуры и гранты за %2s год' % (grants_by_year.title)
            }
        )


def grant_by_grant_id(request, grant_id):
    grant = Grant.objects.get(id=grant_id)

    grant_by_grant_id.title = grant.title
    return render(request, 'grant.html', {'grant': grant})
