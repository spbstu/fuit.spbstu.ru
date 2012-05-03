from django.contrib.admin import ModelAdmin
from settings import TINYMCE_SETUP, TINYMCE_JS_URL 


class ExtAdmin(ModelAdmin):
    class Media:
        js = [
            TINYMCE_JS_URL,
            TINYMCE_SETUP,
            ]
