from django.contrib import admin
from django.http import HttpResponseRedirect

from fuitadmin import ExtAdmin
from news.models import GlobalNews, DeansNews, ProfburoNews


class NewsAdmin(ExtAdmin):
    fields = (
            'title',
            'text',
            'date',
            'show'
            )

    def response_add(self, request, obj):
        if "back" in request.GET:
            return HttpResponseRedirect(request.GET["back"])
        else:
            return ExtAdmin.response_add(self, request, obj)


class DeansNewsAdmin(ExtAdmin):
    fields = (
            'title',
            'text',
            'date',
            'expired',
            'show'
            )

    def response_add(self, request, obj):
        if "back" in request.GET:
            return HttpResponseRedirect(request.GET["back"])
        else:
            return ExtAdmin.response_add(self, request, obj)

admin.site.register(GlobalNews, NewsAdmin)
admin.site.register(ProfburoNews, NewsAdmin)
admin.site.register(DeansNews, DeansNewsAdmin)
