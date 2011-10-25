from django import template
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

       pages.append(Page.objects.get(url = path))
       path = path + i + '/'            
    pages.append(Page.objects.get(url = path))
    
    return {
            'pages': pages,
            'request': context['request']
            }