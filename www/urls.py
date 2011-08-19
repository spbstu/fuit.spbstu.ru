# -*- coding: utf-8 -*-
import os
from django.conf.urls.defaults import *
from django.conf import settings
from www.views import *




urlpatterns = patterns('',
    # Example:
    (r'^$', page, {'template': 'index.html', 'block': 'global-news'}),
    (r'^news/', page, {'template': 'inner-page.html', 'block': 'global-news'}),
    (r'^about/', page, {'template': 'inner-page.html', 'block': 'base-content-box'}),
    (r'^about/structure/', page, {'template': 'inner-page.html', 'block': 'base-content-box'}),
    (r'^tinymce/', include('tinymce.urls')),
    (r'^admin/filebrowser/', include('filebrowser.urls')),
)   