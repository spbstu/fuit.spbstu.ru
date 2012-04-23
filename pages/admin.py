from django.contrib import admin
from django.contrib.flatpages.models import FlatPage

from pages.models import *
from fuitadmin import ExtAdmin


class PagesAdmin(ExtAdmin):
    list_display = ('title', 'url', 'show_in_menu', 'show_sidebar')
    list_display_links = ('title',)

admin.site.register(Page, PagesAdmin)
admin.site.register(Attachment)
admin.site.register(PageAttachments)
admin.site.register(MenuItem)

admin.site.unregister(FlatPage)
