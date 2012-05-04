#-*- coding: utf8 -*-
# Create your views here.

import math

from django.shortcuts import render

from profburo.models import *

months = ['', 'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']


def documents(request):
    doc_types = DocType.objects.order_by('weight')

    documents_q = Document.objects.order_by('date')

    documents = {}

    for doc_type in doc_types:
        documents[doc_type.id] = [[] for i in range(0, 13)]

    for document in documents_q:
        documents[document.doc_type_id][document.date.month].append(document)

    return render(request, 'documents.html', {
        'months': months,
        'doc_types': doc_types,
        'documents': documents
        })

documents.title = 'Документы'


def events_list(request, offset=0):
    try:
        offset = int(offset)
    except:
        offset = 0
    items_per_page = 1
    events = Event.objects.filter(is_public=True).order_by('-date')
    count = len(events)

    return render(request, 'events_list.html', {
        'pager': [page for page in range(0, int(math.floor(count / items_per_page)))],
        'offset': offset,
        'events': events[offset * items_per_page:(offset + 1) * items_per_page]
        })

events_list.title = 'Мероприятия'


def event_by_id(request, id):
    event = Event.objects.get(id=id)

    event_by_id.title = event.title

    return render(request, 'event.html', {
        'event': event
        })
