from django.contrib.admin import ModelAdmin
from settings iport STATIC_URL


class ExtAdmin(ModelAdmin):
    class Media:
        js = [
            #'grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
            #STATIC_URL + 'grappelli/tinymce/jscripts/tiny_mce/tiny_mce.js',
            #'grappelli/tinymce_setup/tinymce_setup.js',
            #STATIC_URL + 'grappelli/tinymce_setup/tinymce_setup.js',
            ]
