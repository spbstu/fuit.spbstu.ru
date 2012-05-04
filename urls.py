from django.conf.urls.defaults import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from filebrowser.sites import site
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^news/', include('news.urls'), {'scope': 'global'}),
    url(r'^deannews/', include('news.urls'), {'scope': 'deannews'}),
    url(r'^profburo/news/', include('news.urls'), {'scope': 'profburo'}),
    url(r'^profburo/documents/', 'profburo.views.documents'),
    url(r'^profburo/events/$', 'profburo.views.events_list'),
    url(r'^profburo/events/(?P<id>[0-9]+)/$', 'profburo.views.event_by_id'),
    url(r'^profburo/events/archive/((?P<offset>[0-9]+)/)?$', 'profburo.views.events_list'),
    url(r'^about/contacts/', 'staff.views.contacts'),
    url(r'^about/departments/', 'staff.views.departments'),
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/filebrowser/', include(site.urls)),
    url(r'^admin/', include(admin.site.urls)),

    url(r'^for-students/schedule/', include('schedule.urls')),
    url(r'^for-students/exams/(?P<group>.+)/$', 'schedule.views.exam'),
    url(r'^scientific-work/', include('scientific.urls')),

    url(r'^media/(?P<path>.*)', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
)

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
