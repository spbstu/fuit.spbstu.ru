# -*- coding: utf8 -*-
import re

from django import template
from django.core.urlresolvers import resolve

from pages.models import *

monthsTupleV = (
            u'',
            u'января',
            u'февраля',
            u'марта',
            u'апреля',
            u'мая',
            u'июня',
            u'июля',
            u'августа',
            u'сентября',
            u'октября',
            u'ноября',
            u'декабря'
        )

register = template.Library()


@register.inclusion_tag('menu_items.html', takes_context=True)
def menu(context):
    try:
        url_regex = '^/' + context['request'].path.split('/')[1] + '/[^/]+/$'
        request = context['request']
    except:
        url_regex = '^/$'
        request = None
    return {
            'all': Page.objects.filter(show_in_menu='1',
                                       url__regex='^/[^/]+/$'),
            'nested_pages': Page.objects.filter(show_in_menu='1',
                                          url__regex=url_regex),
            'nested_views': MenuItem.objects.filter(url__regex=url_regex),
            'request': request
            }


@register.inclusion_tag('menu_full.html', takes_context=True)
def menuFull(context):
    try:
        request = context['request']
    except:
        request = None
    url_regex = '^/([^/]+/){1,2}$'
    raw_pages = Page.objects.filter(show_in_menu='1', url__regex=url_regex)
    raw_menu_items = MenuItem.objects.filter(url__regex=url_regex)
    level1_re = re.compile('^/[^/]+/$')
    parent_re = re.compile('^/[^/]+/')
    pages = {}
    for page in raw_pages:
        if level1_re.match(page.url):
            pages[page.url] = {
                    'page': page,
                    'children': []
                    }
        else:
            parent = parent_re.match(page.url).group()
            pages[parent]['children'].append(page)

    for page in raw_menu_items:
        if level1_re.match(page.url):
            pages[page.url] = {
                    'page': page,
                    'children': []
                    }
        else:
            parent = parent_re.match(page.url).group()
            pages[parent]['children'].append(page)

    return {
            'pages': pages,
            'request': request
            }


@register.inclusion_tag('files_list.html', takes_context=True)
def attachmentsList(context):
    files = []

    try:
        page = context['flatpage']
        files_relations = PageAttachments.objects.filter(page__id=page.id)
        for file in files_relations:
            files.append(file.attachment)
    except:
        files = []
    return {
        'files': files,
        'request': context['request']
        }


@register.inclusion_tag('breadcrumbs.html', takes_context=True)
def breadcrumbs(context, title=""):
    try:
        bc = context['request'].path.strip('/')
        bc = bc.split('/')
        path = '/'
        pages = []

        for i in bc:
            try:
                pages.append(Page.objects.get(url=path))
                path = path + i + '/'
            except:
                view, args, kwargs = resolve(path)

                pages.append({'url': path, 'title': view.title % kwargs})
                path = path + i + '/'

        try:
            pages.append(Page.objects.get(url=path))
        except:
            view, args, kwargs = resolve(context['request'].path)
            pages.append({'url': context['request'].path, 'title': view.title %
                kwargs})
        request = context['request']
    except:
        pages = [{'url': '/', 'title': 'Главная'}, {'url': '/404/', 'title': 'Ошибка'}]
        request = {'path': '/404/'}

    return {
            'pages': pages,
            'request': request
            }


@register.inclusion_tag('title.html', takes_context=True)
def title(context, title=""):
    try:
        is_front = (context['request'].path == '/')
        try:
            title = Page.objects.get(url=context['request'].path).title
        except:
            view, args, kwargs = resolve(context['request'].path)
            title = view.title
    except:
        title = "Ошибка"
        is_front = False

    return {'title': title, 'is_front': is_front}


@register.inclusion_tag('date_interval.html', takes_context=True)
def date_interval(context, date_first, date_second):

    if date_first.year != date_second.year:
        result = u"%2s %2s %2s – %2s %2s %2s" % (date_first.day,
            monthsTupleV[date_first.month], date_first.year, date_second.day,
            monthsTupleV[date_second.month], date_second.year)
    else:
        if date_first.month != date_second.month:
            result = u"%2s %2s – %2s %2s" % (date_first.day,
            monthsTupleV[date_first.month], date_second.day,
            monthsTupleV[date_second.month])
        else:
            if date_first.day != date_second.day:
                result = u"%2s–%2s %2s" % (date_first.day, date_second.day,
                monthsTupleV[date_first.month])
            else:
                result = u"%2s %2s" % (date_first.day, monthsTupleV[date_first.month])

    return {'date': result}


@register.filter
def key(d, key_name):
    return d[key_name]


@register.filter
def index(l, i):
    return l[i]
