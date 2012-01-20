from django import template
from django.core.urlresolvers import resolve
from pages.models import Page

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

@register.inclusion_tag('breadcrumbs.html', takes_context=True)
def breadcrumbs(context):
    bc = context['request'].path.strip('/')
    bc = bc.split('/')
    path = '/'
    pages = []
    
    for i in bc:
        try:
            pages.append(Page.objects.get(url = path))
            path = path + i + '/'
        except :
            view, args, kwargs = resolve(context['request'].path)
            pages.append({'url':context['request'].path, 'title': view.title})
            path = path + i + '/'
    try:
        pages.append(Page.objects.get(url = path))
    except :
        view, args, kwargs = resolve(context['request'].path)
        pages.append({'url':context['request'].path, 'title': view.title})

    return {
            'pages': pages,
            'request': context['request']
            }