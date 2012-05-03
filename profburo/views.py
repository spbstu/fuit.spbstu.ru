#-*- coding: utf8 -*-
# Create your views here.

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
