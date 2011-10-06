from django.conf.urls.defaults import patterns, include, url


urlpatterns = patterns('',
   url(r'^$', 'django.contrib.flatpages.views.flatpage', { 'url': '/' }),
   url(r'', include('django.contrib.flatpages.urls'))
)