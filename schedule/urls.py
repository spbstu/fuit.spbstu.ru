from django.conf.urls.defaults import patterns, include, url
#from fuit.news.views import news_list

urlpatterns = patterns('fuit.schedule.views',
    # Examples:
    url(r'^(?P<group>.+)/$', 'schedule'),
)