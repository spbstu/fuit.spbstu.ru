#-*- coding: utf8 -*-
from django.contrib import admin

from scientific.models import *
from fuit.admin import ExtAdmin

admin.site.register(Conference, ExtAdmin)
admin.site.register(Grant, ExtAdmin)
admin.site.register(GrantAttachment)
admin.site.register(TeacherInterest, ExtAdmin)
admin.site.register(ScienceWeekThesises)
