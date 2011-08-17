# -*- coding: utf-8 -*-
import os
from django.conf.urls.defaults import *
from django.conf import settings
from www.views import *


# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()


#t = os.path.join(settings.MEDIA_ROOT, "css")
#print t

urlpatterns = patterns('',
    # Example:
    (r'', include('fuit.www.urls')),
 
    (r'^css/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': os.path.join(settings.MEDIA_ROOT, "css")} ),
    (r'^i/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': os.path.join(settings.MEDIA_ROOT, "i")} ),
    (r'^img/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': os.path.join(settings.MEDIA_ROOT, "img")} ),

    (r'^js/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': os.path.join(settings.MEDIA_ROOT, "js")} ),
    (r'^media/js/(?P<path>.*)$', 'django.views.static.serve',
    {'document_root': os.path.join(settings.MEDIA_ROOT, "js")} ),

    # Uncomment the admin/doc line below to enable admin documentation:
    # (r'^admin/doc/', include('django.contrib.admindocs.urls')),
    (r'^admin/filebrowser/', include('filebrowser.urls')),
    
    
    # Uncomment the next line to enable the admin:
    (r'^admin/', include(admin.site.urls)),
)   