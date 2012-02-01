from django.contrib import admin
from news.models import GlobalNews, DeansNews


class NewsAdmin(admin.ModelAdmin):
    fields = (
            'title',
            'text',
            'date',
            'show'
            )
    class Media:
        js = [
            '/static/grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
            '/static/grappelli/tinymce_setup/tinymce_setup.js',
            ]

class DeansNewsAdmin(NewsAdmin):
    fields = (
            'title',
            'text',
            'date',
            'expired',
            'show'
            )

admin.site.register(GlobalNews, NewsAdmin)
admin.site.register(DeansNews, DeansNewsAdmin)
