from django.contrib import admin
from fuitadmin import ExtAdmin
from news.models import GlobalNews, DeansNews, ProfburoNews


class NewsAdmin(ExtAdmin):
    fields = (
            'title',
            'text',
            'date',
            'show'
            )


class DeansNewsAdmin(ExtAdmin):
    fields = (
            'title',
            'text',
            'date',
            'expired',
            'show'
            )

admin.site.register(GlobalNews, NewsAdmin)
admin.site.register(ProfburoNews, NewsAdmin)
admin.site.register(DeansNews, DeansNewsAdmin)
