# -*- coding: utf8 -*-

import datetime
from news.models import GlobalNews, DeansNews, ProfburoNews
from django.shortcuts import render_to_response
from django.template import RequestContext


def news_archive_by_year(request, scope, year=None):
    newsObj = {'global': GlobalNews,
        'deannews': DeansNews,
        'profburo': ProfburoNews}[scope]
    title = {'global': 'Архив новостей',
        'deannews': 'Архив объявлений деканата',
        'profburo': 'Новости профбюро'}[scope]
    if year:
        news = newsObj.objects.filter(date__year=year).order_by('-date')
    else:
        news = newsObj.objects.filter(date__year=datetime.date.today().year).order_by('-date')
    return render_to_response('news.html', {'content': news, 'title': title,
        'scope': scope}, RequestContext(request))

news_archive_by_year.title = u'%(year)s'


def news_archive(request, scope):
    return news_archive_by_year(request, scope)

news_archive.title = u'Архив новостей'
