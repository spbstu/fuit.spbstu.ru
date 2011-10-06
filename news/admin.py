from django.contrib import admin
from news.models import News

#class NewsAdmin(admin.ModelAdmin):
    #list_display = (upper_case_name,)
    
admin.site.register(News)