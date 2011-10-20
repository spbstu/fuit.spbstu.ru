# -*- coding: utf8 -*- 
from django.db import models
import datetime
#import tinymce

# Create your models here.
class News(models.Model):
    title = models.CharField('Заголовок', max_length = 300)
    date = models.DateField('Дата публикации', default=datetime.date.today)
    short = models.CharField('Кратко', max_length = 300)
    text = models.TextField('Новость полностью')
    #img = models.ImageField(upload_to="news")
    show = models.BooleanField('Публиковать', default=True)
    type = models.IntegerField('Тип',choices=((0,'Новость'),(1,'Объявление')))
    class Meta: 
        verbose_name = u'Новость'
        verbose_name_plural = u'Новости' 
    def __unicode__(self):
        return str(self.date.strftime("%d.%m.%Y")) + ' - '+ self.title