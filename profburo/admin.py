#-*- coding: utf8 -*-
from django.contrib import admin

from profburo.models import *
from fuitadmin import ExtAdmin

admin.site.register(DocType, ExtAdmin)
admin.site.register(Document)
admin.site.register(Event, ExtAdmin)
