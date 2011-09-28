$(function() {
	$('.show-contact-details').click(function() {
		$(this)
			.closest('.contact-item')
			.find('.contact-details')
				.toggleClass('contact-details-show')
				.find('.closer')
					.click(function() {
						$(this)
							.parent()
							.removeClass('contact-details-show');
						return false;
					});
		return false;
	});
	$('.tab-item').click(function() {
		var targetTab = $(this).find('a').attr('href');
		
		$('.tab-item').removeClass('current');
		$(this).addClass('current');
		$('.tab-content').removeClass('tab-content-visible');
		$(targetTab).addClass('tab-content-visible');
		return false;
	})
})