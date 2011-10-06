from django.conf.urls.defaults import patterns, include, url
#from fuit.news.views import news_list

urlpatterns = patterns('',
    # Examples:
    url(r'^$', 'news.views.news_list'),
   
)