#-*- coding: utf8 -*-
from django.contrib import admin
from django.db import models
from scientific.models import *

admin.site.register(Conference)
admin.site.register(Grant)
admin.site.register(GrantAttachment)
admin.site.register(TeacherInterest)
