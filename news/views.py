# -*- coding: utf8 -*-

import datetime
from django.conf.urls.defaults import patterns, include, url
from fuit.news.models import News, GlobalNews, DeansNews
from django.shortcuts import render_to_response
from django.template import RequestContext


def news_archive_by_year(request, scope, year=None):
    newsObj = {'global': GlobalNews, 'deannews': DeansNews}[scope]
    title = {'global': 'Архив новостей', 'deannews': 'Архив объявлений деканата'}[scope]
    if year:
        news = newsObj.objects.filter(date__year = year)
    else:
        news = newsObj.objects.filter(date__year = datetime.date.today().year)
    return render_to_response('news.html', {'content': news, 'title': title,
        'scope': scope}, RequestContext(request))

news_archive_by_year.title = u'%(year)s'

def news_archive(request, scope):
    return news_archive_by_year(request, scope)

news_archive.title = u'Архив новостей'
