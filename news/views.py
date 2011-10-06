from django.conf.urls.defaults import patterns, include, url
from fuit.news.models import News
from django.shortcuts import render_to_response


def news_list(request):
    news = News.objects.all()
    return render_to_response('base.html', {'news': news}) 