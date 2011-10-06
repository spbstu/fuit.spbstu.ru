
from django import template
from news.models import News

register = template.Library()

@register.inclusion_tag('list.html')
def news_list(t):
    news = News.objects.filter(type = t)
    return {'news': news}