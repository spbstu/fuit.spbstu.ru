from django import template
from django.core.urlresolvers import resolve
from pages.models import Page
import re

register = template.Library()

@register.inclusion_tag('menu_items.html', takes_context=True)
def menu(context):
    return {
            'all': Page.objects.filter(show_in_menu = '1', 
                                       url__regex = '^/[^/]+/$'),
            'nested': Page.objects.filter(show_in_menu = '1',
                                          url__regex = '^/' + context['request'].path.split('/')[1] + '/[^/]+/$'),
                                          #url__regex = '^/about'  + '/[^/]+/$'),
            'request': context['request']
            }

@register.inclusion_tag('menu_full.html', takes_context = True)
def menuFull(context):
    raw_pages = Page.objects.filter(show_in_menu = '1',
                                url__regex = '^/([^/]+/){1,2}$')
    level1_re = re.compile('^/[^/]+/$')
    parent_re = re.compile('^/[^/]+/')
    pages = {}
    for page in raw_pages:
        if level1_re.match(page.url):
            pages[page.url] = {
                    'page': page,
                    'children': {}
                    }
        else:
            parent = parent_re.match(page.url).group()
            pages[parent]['children'][page.url] = page

    return {
            'pages': pages,
            'request': context['request']
            }

@register.inclusion_tag('breadcrumbs.html', takes_context=True)
def breadcrumbs(context, title=""):
    bc = context['request'].path.strip('/')
    bc = bc.split('/')
    path = '/'
    pages = []

    for i in bc:
        try:
            pages.append(Page.objects.get(url = path))
            path = path + i + '/'
        except :
            view, args, kwargs = resolve(path)
            pages.append({'url':path, 'title': view.title % kwargs})
            path = path + i + '/'
    try:
        pages.append(Page.objects.get(url = path))
    except :
        view, args, kwargs = resolve(context['request'].path)
        pages.append({'url':context['request'].path, 'title': view.title %
            kwargs})

    return {
            'pages': pages,
            'request': context['request']
            }
