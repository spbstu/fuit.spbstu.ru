# -*- coding: utf8 -*-

from django.conf.urls.defaults import patterns, url
#from fuit.news.views import news_list

urlpatterns = patterns('fuit.scientific.views',
    # Examples:
    url(r'^conference/(?P<year>[0-9]{4})/$', 'conferences_archive'),
    url(r'conference/$', 'conferences_active'),
    url(r'contests-and-grants/$', 'grants_all'),
    url(r'contests-and-grants/(?P<year>[0-9]{4})/$', 'grants_by_year'),
    url(r'contests-and-grants/[0-9]{4}/(?P<grant_id>[0-9]+)/$', 'grant_by_grant_id'),
    url(r'teachers-interest/$', 'teachers_interest'),
)
