import datetime
import re

from django import template
from django.db.models import Max, Min

from news.models import GlobalNews, DeansNews

register = template.Library()


@register.inclusion_tag('list.html')
def news_list():
    news = GlobalNews.objects.filter(show=True)[:5]
    return {'news': news, 'show_date': 1}


@register.inclusion_tag('list.html')
def deans_news_list():
    news = DeansNews.objects.filter(show=True,
        expired__gt=datetime.date.today())
    if (len(news) == 0):
        news = DeansNews.objects.filter(show=True)[:2]
    return {'news': news}


@register.inclusion_tag('pager.html', takes_context=True)
def get_pager_by_years(context, scope):
    newsObj = {'global': GlobalNews, 'deannews': DeansNews}[scope]
    basepath = re.compile('[0-9]{4}/$').sub('', context['request'].path)
    years = [{'title': year, 'url': '%s%s/' % (basepath, year)} for year in
        range(newsObj.objects.aggregate(Min('date'))['date__min'].year, datetime.date.today().year + 1)]
    return {'years': years, 'request': context['request']}
