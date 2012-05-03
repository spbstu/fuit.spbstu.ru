from django.conf.urls.defaults import patterns, url
#from fuit.news.views import news_archive

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'news.views.news_archive'),
    url(r'^((?P<year>\d{4})/)*$', 'news.views.news_archive_by_year'),
)
