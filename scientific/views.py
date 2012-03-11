# -*- coding: utf8 -*-

# Create your views here.

from scientific.models import Conference, monthsTuple
from django.shortcuts import render
from django.template import RequestContext, Context
import datetime
from itertools import chain

def archive(request, year=datetime.datetime.now().year):
    today = datetime.datetime.now().date()
    conferences = {
        'local': {
            'future': [],
            'past': []
        },
        'national': {
            'future': [],
            'past': []
        },
        'international': {
            'future': [],
            'past': []
        }
    }

    local_conferences = sorted (
        list(Conference.objects.filter(conferenceType='local', startDate__year=year)) + 
        list(Conference.objects.filter(conferenceType='local', alternateDateYear=year)),
        key = sortConference
        )

    national_conferences = sorted(
        list(Conference.objects.filter(conferenceType='national', startDate__year=year)) + 
        list(Conference.objects.filter(conferenceType='national', alternateDateYear=year)),
        key = lambda x: x.alternateDateMonth and x.alternateDateMonth or x.startDate.month
        )

    international_conferences = sorted(
        list(Conference.objects.filter(conferenceType='international', startDate__year=year)) +
        list(Conference.objects.filter(conferenceType='international', alternateDateYear=year)),
        key = sortConference
        )

    for conference in local_conferences:
        if conference.endDate:
            if conference.endDate > today:
                conferences['local']['future'].append(conference)
            else:
                conferences['local']['past'].append(conference)
        else:
            if int(conference.alternateDateMonth) > today.month:
                conferences['local']['future'].append(conference)
            else:
                conferences['local']['past'].append(conference)

    if year == datetime.datetime.now().year:
        archive.title = u'Научные конференции'
    else:
        archive.title = str(year)
    return render(request, 'conference.html', {'local_conferences': local_conferences,
        'national_conferences': national_conferences, 
        'international_conferences': international_conferences,
        'year': year,
        'month': monthsTuple})