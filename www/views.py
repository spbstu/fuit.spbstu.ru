# -*- coding: utf-8 -*-
# Create your views here.

from django.http import HttpResponse
from django.template import Context, loader
import fuit.settings as settings
from datetime import date
from www.models import GlobalNews
from www.models import DeansNews
from www.models import Pages
#from www.models import PageContent

# 
def page(request, template, block):
   tmpl = loader.get_template(template)
   try:
       title =  Pages.objects.get(url=request.path).title
   except Exception, e:
       title = e

   content =  Pages.objects.get(url=request.path).pagecontent_set.all()
   
   stream = Context({
                            'title': title,
                            'now': datenow(),
                            'news': {
                                   'global': GlobalNews.objects.all()[:settings.FUIT_GLOBAL_NEWS],
                                   'dean' : DeansNews.objects.all()[:settings.FUIT_DEANS_NEWS],
                            },
                            'pageContent': content,
                            'menu': _menu(request.path, '/'),
                            'q':_breadcrumbs(request.path),
                            'request': request,
                            'block': block
                            })
   return HttpResponse(tmpl.render(stream))
   #return HttpResponse(["%s " % mkList('/')])



def datenow():
    return date.today().strftime("%d.%m.%Y")

def _menu(current, root):
    menu_list = []
    for i in Pages.objects.filter(url__regex = '^' + root + '[^/]+/*$'):
        if i.url in current:
            menu_list.append({"me": i, "children": _menu(current, i.url)})
        else:
            menu_list.append({"me": i, "children": []})
        
    
    return menu_list
#    
def _breadcrumbs(current):
    bc_list = []
    current = current.strip("/")
    j="/"
    for i in current.split("/"):
                j += i + "/"
                try:
                    x= Pages.objects.get(url=j)
                    bc_list.append(x)
                except Exception, e:
                    bc_list = []

    return bc_list
 