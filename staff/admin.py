#-*- coding: utf8 -*-
from django.contrib import admin

from staff.models import *
from fuitadmin import ExtAdmin

admin.site.register(EducationDepartments, ExtAdmin)
admin.site.register(Buildings)
admin.site.register(Persons, ExtAdmin)
admin.site.register(OfficialDepartments, ExtAdmin)
admin.site.register(Positions)
admin.site.register(PersonToPosition)
