from django.contrib import admin
from django.contrib.flatpages.models import FlatPage

from pages.models import *
from fuitadmin import ExtAdmin


admin.site.register(Page, ExtAdmin)
admin.site.register(Attachment)
admin.site.register(PageAttachments)
admin.site.register(MenuItem)

admin.site.unregister(FlatPage)
