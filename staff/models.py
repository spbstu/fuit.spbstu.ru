# -*- coding: utf8 -*-
from django.db import models


class EducationDepartments(models.Model):
    title = models.CharField("Название кафедры", max_length=255)
    abbr = models.CharField("Сокращенное название кафедры", max_length=16)
    index = models.IntegerField("Индекс кафедры")
    short_description = models.TextField("Краткое описание кафедры")
    description = models.TextField("Описание кафедры")
    sitename = models.URLField("Адрес сайта", blank=True)
    phone = models.CharField("Телефон", max_length=24, blank=True)
    email = models.EmailField("Email", max_length=64, blank=True)

    class Meta:
        verbose_name = "Кафедра"
        verbose_name_plural = 'Кафедры'
        ordering = ['index']

    def __unicode__(self):
        return self.abbr


class Buildings(models.Model):
    title = models.CharField("Название", max_length=64)
    address = models.CharField("Адрес", max_length=255, blank=True)
    latitude = models.DecimalField("Широта", max_digits=8, decimal_places=6, blank=True, null=True)
    longitude = models.DecimalField("Долгота", max_digits=8, decimal_places=6, blank=True, null=True)
    is_additional = models.BooleanField("Вспомогательное")
    photo = models.ImageField("Фотография", upload_to='photos/buildings', blank=True)

    class Meta:
        verbose_name = 'Здание'
        verbose_name_plural = 'Здания'

    def __unicode__(self):
        return self.title


class Persons(models.Model):
    last_name = models.CharField("Фамилия", max_length=64)
    first_name = models.CharField("Имя", max_length=64)
    patronimic = models.CharField("Отчество", max_length=64)
    photo = models.ImageField("Фотография", upload_to='photos/persons', blank=True)
    graduate = models.CharField("Ученая степень", max_length=64, blank=True)
    phone = models.CharField("Телефон", max_length=64, blank=True)
    email = models.EmailField("Email", max_length=64, blank=True)
    office = models.CharField("Кабинет", max_length=64, blank=True)
    meeting_time = models.TextField("Часы приема", blank=True)

    class Meta:
        verbose_name = 'Сотрудник'
        verbose_name_plural = 'Сотрудники'

    def __unicode__(self):
        return '%2s %2s %2s' % (self.last_name, self.first_name, self.patronimic)


class OfficialDepartments(models.Model):
    title = models.CharField("Название отдела", max_length=64)
    info = models.TextField("Дополнительная информация", blank=True)
    phone = models.CharField("Телефон", max_length=24, blank=True)
    email = models.EmailField("Email", max_length=64, blank=True)

    class Meta:
        verbose_name = 'Подразделение'
        verbose_name_plural = 'Подразделения'

    def __unicode__(self):
        return self.title


class Positions(models.Model):
    title = models.CharField("Наименование", max_length=64)
    department = models.ForeignKey("OfficialDepartments", verbose_name='Подразделение', related_name='department_positions')
    order = models.IntegerField("Порядок вывода", null=True, blank=True)

    class Meta:
        verbose_name = 'Должность'
        verbose_name_plural = 'Должности'

    def __unicode__(self):
        return self.title


class PersonToPosition(models.Model):
    person = models.ForeignKey("Persons", verbose_name='Сотрудник')
    position = models.ForeignKey("Positions", verbose_name='Должность')
    education_department = models.ForeignKey("EducationDepartments",
        verbose_name='Кафедра',
        null=True,
        blank=True)

    class Meta:
        verbose_name = ('Должность сотрудника')
        verbose_name_plural = ('Должности сотрудников')

    def __unicode__(self):
        return u"%2s (%2s)" % (self.position, self.person)
