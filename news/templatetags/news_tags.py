import datetime
import re

from django import template
from django.db.models import Max, Min

from news.models import GlobalNews, DeansNews, ProfburoNews

register = template.Library()


@register.inclusion_tag('list.html')
def news_list():
    news = GlobalNews.objects.filter(show=True).order_by('-date')[:3]
    return {'news': news, 'show_date': 1}


@register.inclusion_tag('list.html')
def deans_news_list():
    news = DeansNews.objects.filter(show=True,
        expired__gt=datetime.date.today()).order_by('-date')
    if (len(news) == 0):
        news = DeansNews.objects.filter(show=True).order_by('date')[:2]
    return {'news': news}


@register.inclusion_tag('pager.html', takes_context=True)
def get_pager_by_years(context, scope):
    newsObj = {'global': GlobalNews,
        'deannews': DeansNews,
        'profburo': ProfburoNews}[scope]
    basepath = re.compile('[0-9]{4}/$').sub('', context['request'].path)
    try:
        years = [{'title': year, 'url': '%s%s/' % (basepath, year)} for year in
            range(newsObj.objects.aggregate(Min('date'))['date__min'].year, datetime.date.today().year + 1)]
    except:
        years = []
    return {'years': years, 'request': context['request']}
