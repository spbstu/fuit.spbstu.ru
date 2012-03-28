from django.contrib import admin
from pages.models import *
from django.contrib.flatpages.models import FlatPage


class PageAdmin(admin.ModelAdmin):
    class Media:
        js = [
            '/static/grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
            '/static/grappelli/tinymce_setup/tinymce_setup.js',
            ]

admin.site.register(Page, PageAdmin)
admin.site.register(Attachment)
admin.site.register(PageAttachments)

admin.site.unregister(FlatPage)
