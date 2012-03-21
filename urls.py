from django.conf.urls.defaults import patterns, include, url
from django.contrib.staticfiles.urls import staticfiles_urlpatterns
from django.conf.urls.static import static
from django.conf import settings

# Uncomment the next two lines to enable the admin:
from django.contrib import admin
admin.autodiscover()

urlpatterns = patterns('',
    # Examples:
    url(r'^news/', include('news.urls'), {'scope': 'global'}),
    url(r'^deannews/', include('news.urls'), {'scope': 'deannews'}),
    url(r'^about/contacts/', 'staff.views.contacts'),
    url(r'^tinymce/', include('tinymce.urls')),
    #url(r'^tinymce/filebrowser/', include('filebrowser.urls')),
    url(r'^grappelli/', include('grappelli.urls')),
    url(r'^admin/filebrowser/', include('filebrowser.urls')),
    url(r'^admin/', include(admin.site.urls)),

    url(r'^for-students/schedule/', include('schedule.urls')),
    url(r'^scientific-work/conference/', include('scientific.urls')),

    url(r'^media/(?P<path>.*)', 'django.views.static.serve', {'document_root': settings.MEDIA_ROOT}),
    #url(r'', include('www.urls')),

) 

urlpatterns += staticfiles_urlpatterns()
urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
