from django.conf.urls.defaults import patterns, url
#from fuit.news.views import news_list

urlpatterns = patterns('schedule.views',
    # Examples:
    url(r'^(?P<group>[0-9\-_]+)/((?P<week>(odd|even)?)/)?$', 'schedule'),
)
