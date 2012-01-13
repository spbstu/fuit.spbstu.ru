# -*- coding: utf8 -*-
# Snippet from http://djangosnippets.org/snippets/2051/

from django.forms.widgets import Widget
from django.forms.util import flatatt
from django.utils.encoding import force_unicode
from django.utils.safestring import mark_safe

class CheckboxesForCommaSeparated(Widget):
    def __init__(self, choices, attrs=None, renderer=lambda x: mark_safe(u'\n'.join(x))):
        super(CheckboxesForCommaSeparated, self).__init__(attrs)
        self.choices = choices
        self.renderer = renderer
    
    def decompress(self, value):
        return value.split(',')
    
    def render(self, name, value, attrs=None):
        if value is None:
            value = ''
        output = []
        selected = self.decompress(value)
        has_id = attrs and 'id' in attrs
        for i, v in enumerate(self.choices):
            final_attrs = self.build_attrs(attrs, type='checkbox', name=name)
            final_attrs['value'] = force_unicode(v)
            if str(v) in selected:
                final_attrs['checked'] = 'checked'
            if has_id:
                final_attrs['id'] = '%s_%s' % (attrs['id'], i)
            output.append(u'<input%s />' % flatatt(final_attrs))
        return self.renderer(output)
    
    def value_from_datadict(self, data, files, name):
        values = data.getlist(name)
        return ','.join(values) if values else ''

class NumbersSelectionWidget(CheckboxesForCommaSeparated):
    def __init__(self, labels, *args, **kwargs):
        self.labels = labels
        kwargs['renderer'] = self.render_with_labels
        super(NumbersSelectionWidget, self).__init__(*args, **kwargs)
    
    def render_with_labels(self, checkboxes):
        output = []
        output.append('<table>')
        output.append('<tr>')
        for i, c in enumerate(checkboxes):
            output.append('<td>%s</td>' % self.labels[i % len(self.labels)])
        output.append('</tr>')
        output.append('<tr>')
        for i, c in enumerate(checkboxes):
            output.append('<td>%s</td>' % c)
        output.append('</tr>')
        output.append('</table>')
        return mark_safe(u'\n'.join(output))