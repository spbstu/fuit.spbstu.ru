# -*- coding: utf8 -*-

# Create your views here.

from scientific.models import Conference
from django.shortcuts import render
from django.template import RequestContext, Context
import datetime

def archive(request, year=datetime.datetime.now().year):

    local_conferences = Conference.objects.filter(conferenceType='local',
        startDate__year=year)
    national_conferences = Conference.objects.filter(conferenceType='national',
        startDate__year=year)
    international_conferences = Conference.objects.filter(conferenceType='international',
        startDate__year=year)

    if year == datetime.datetime.now().year:
        archive.title = u'Научные конференции'
    else:
        archive.title = str(year)
    return render(request, 'conference.html', {'local_conferences': local_conferences,
        'national_conferences': national_conferences, 
        'international_conferences': international_conferences,
        'year': year})