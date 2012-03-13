# -*- coding: utf8 -*-

from django.conf.urls.defaults import patterns, url
#from fuit.news.views import news_list

urlpatterns = patterns('fuit.scientific.views',
    # Examples:
    url(r'^(?P<year>[0-9]{4})/$', 'conferences_archive'),
    url(r'$', 'conferences_active'),
)