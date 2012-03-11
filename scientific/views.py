# -*- coding: utf8 -*-

# Create your views here.

from scientific.models import Conference, monthsTuple
from django.shortcuts import render
from django.template import RequestContext, Context
import datetime
from itertools import chain

def sortConference(conf):
    if conf.alternateDateMonth:
        return conf.alternateDateMonth
    else:
        return conf.startDate.month

def archive(request, year=datetime.datetime.now().year):
    local_conferences = sorted(chain(
        Conference.objects.filter(conferenceType='local', startDate__year=year), 
        Conference.objects.filter(conferenceType='local', startDate__exact=None, alternateDateYear=year)
        ),
        key = lambda instance: sortConference(instance))
    national_conferences = sorted(chain(
        Conference.objects.filter(conferenceType='national', startDate__year=year), 
        Conference.objects.filter(conferenceType='national', startDate__exact=None, alternateDateYear=year)
        ),
        key = lambda instance: sortConference(instance))
    international_conferences = sorted(chain(
        Conference.objects.filter(conferenceType='international', startDate__year=year), 
        Conference.objects.filter(conferenceType='international', startDate__exact=None, alternateDateYear=year)
        ),
        key = lambda instance: sortConference(instance))

    if year == datetime.datetime.now().year:
        archive.title = u'Научные конференции'
    else:
        archive.title = str(year)
    return render(request, 'conference.html', {'local_conferences': local_conferences,
        'national_conferences': national_conferences, 
        'international_conferences': international_conferences,
        'year': year,
        'month': monthsTuple})