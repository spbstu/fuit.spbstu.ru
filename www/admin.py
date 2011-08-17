from django.contrib import admin
from fuit.www.models import GlobalNews, DeansNews, Pages, PageContent


class GlobalNewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'message', 'publishdate')
    date_hierarchy = 'publishdate'
    ordering = ('-publishdate',)
  


class DeansNewsAdmin(admin.ModelAdmin):
    list_display = ('title', 'message', 'publishdate')
    date_hierarchy = 'publishdate'
    ordering = ('-publishdate',)

class PagesAdmin(admin.ModelAdmin):
    list_display = ( 'url', 'title')

class PageContentAdmin(admin.ModelAdmin):
    list_display = ('content' )
    
    
admin.site.register(GlobalNews, GlobalNewsAdmin)
admin.site.register(DeansNews, DeansNewsAdmin)
admin.site.register(Pages, PagesAdmin)
admin.site.register(PageContent)