var carouselInterval = 5000;
var carouselDuration = 1000;
var frame;
var weekDays = ['Воскресение', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
var today = new Date();

(function(){
	if (typeof $ === 'undefined') {
		t = setTimeout(arguments.callee, 100);
	} else {
		init();
	}
})();

/*
 * Функция отображения вкладок
 * Принимает в себя ID целевой вкладки
 * который в дальнейшем очищается от дополнительных символов
 */

function showTab(targetTab) {
	if (targetTab === "" || targetTab === null) {
		return true;
	}
	target = targetTab.replace(/#(!\/)*/, '');
	window.location.hash = '!/' + target;
	
	$('.tab-item')
		.removeClass('current');
	$('a[href=#'+target+']')
		.closest('li')
		.addClass('current');
	$('.tab-content')
		.removeClass('tab-content-visible');
	$('#' + target)
		.addClass('tab-content-visible');
	return false;
}

function carousel(el, target) {
	var content = el.find('.carousel-content');
	var step = content.find('.carousel-item').width();
	var count = content.find('.carousel-item').length;
	var pager = $('.promo-pager li a');
	if (Math.abs(parseInt(content.css('left'))) < step * (count-1)) {
		item++;
	} else {
		item = 0;
	}
	if (target) {
		item = target;
		clearInterval(timer);
		timer = setInterval(function() {carousel($("#promo"), false);}, carouselInterval);
	}
	content.animate({left: '-'+step*item}, carouselDuration);
	pager.removeClass('current');
	pager.eq(item).addClass('current');
}

	
/*
 * Добавление дней недели в расписание
 * Определяем дату на основании значения в таблице
 * Определяем день недели и добавляем к имеющемуся содержимому
 * 
 * Если событие прошло - добавляем экстра-класс
 */

function scheduleSetExtra() {
	var dateArr = $(this).text().split('.');
	var dt = new Date(dateArr[2],dateArr[1] - 1,dateArr[0]);
	console.log(dt);
	var weekDay = weekDays[dt.getDay()];
	$(this).html($(this).text() + '<br /><span class="comment">' + weekDay + '</span>');
	
	if(today > dt) {
		console.log($(this).closest('tr'));
		$(this).closest('tr').addClass('past');
	}
}

/*
 * Функция переключения видимости элементов
 * принимает в себя объект event, откуда дёргает event.data
 * event.data {
 * 	el: $(obj) - ссылка на целевой объект
 * 	showMsg: string - текст, отображаемая у ссылки после скрытия цели
 * 	hideMsg: string - текст, отображаемый у ссылки при видимой цели
 * }
 * */

function toggleEl(event) {
		var objData = event.data;
		var obj = $(event.target);
		var el = $(objData.el);
		if (el.is(':hidden')) {
			el.show();
			obj.text(objData.hideMsg);
		} else {
			el.hide();
			obj.text(objData.showMsg);
		}
		return false;
	}

function init() {
	frame = ( $.browser.safari ) ? $( 'body' ) : $( 'html' );

/*
 * Установка кастомного хеша 
 * и прокрутка страницы к верху
 */

	if (window.location.hash) {
		window.location.hash = '!/' + window.location.hash.replace(/#(!\/)*/, '');
		frame.animate({scrollTop: 0});
	}
	
	$('body').click(function() {
		$('#core-contacts .contact-details')
			.removeClass('contact-details-show');
	});

	$('.show-contact-details').click(function() {
		$('#core-contacts .contact-details')
			.removeClass('contact-details-show');
		$(this)
			.closest('.contact-item')
			.find('.contact-details')
				.toggleClass('contact-details-show')
				.click(function() {
					return false;
				})
				.find('.closer')
					.click(function() {
						$(this)
							.parent()
							.removeClass('contact-details-show');
						return false;
					});
		return false;
	});
	
	$('.promo-pager a').click(function() {
		carousel($("#promo"), $(this).parent().index());
		return false;
	});
	timer = setInterval(function() {
		carousel($("#promo"), false);
	}, carouselInterval);
	
/*
 * Создаём объект параметров переключателя "консультации"
 * в расписании
 */
	
	var consultationToggleData = {
			el: $('.consultation'), 
			showMsg: 'Показать консультации', 
			hideMsg: 'Скрыть консультации'
		};
	
/*
 * Вешаем включаем переключение консультаций в расписании
 */
	
	$('.toggle-consultation')
		.bind('click', consultationToggleData, toggleEl);
	
/*
 * Активация переключения вкладок
 */
	
	$('.tab-item').click(function(event) {
		var targetTab = $(this).find('a').attr('href');
		return showTab(targetTab);
	});

	
	var day = $('.schedule.session .time');
	
	day.each(scheduleSetExtra);
	
	/*
	 * Преобразование хеша для предотвращения
	 * "прыжков" станицы к целевому якорю при загрузке страницы
	 */
	if (window.location.hash) {
		return showTab(window.location.hash);
	}
	
	return false;
}

