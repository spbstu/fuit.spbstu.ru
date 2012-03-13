#-*- coding: utf8 -*-
from django.contrib import admin
from staff.models import *

admin.site.register(EducationDepartments)
admin.site.register(Buildings)
admin.site.register(Persons)
admin.site.register(OfficialDepartments)
admin.site.register(Positions)
admin.site.register(PersonToPosition)
