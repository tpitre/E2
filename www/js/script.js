/* Author: Derby

*/

$(function(){
	$('.hire-us').click(function () {
		$('.contact').toggleClass('flipped');
		$('.shadow img').toggleClass('toggle');
	});
	
	if(!Modernizr.input.placeholder){
	
		$('[placeholder]').focus(function() {
			var input = $(this);
			if (input.val() == input.attr('placeholder')) {
				input.val('');
				input.removeClass('placeholder');
			}
		}).blur(function() {
			var input = $(this);
			if (input.val() == '' || input.val() == input.attr('placeholder')) {
				input.addClass('placeholder');
				input.val(input.attr('placeholder'));
			}
		}).blur();
		$('[placeholder]').parents('form').submit(function() {
			$(this).find('[placeholder]').each(function() {
				var input = $(this);
				if (input.val() == input.attr('placeholder')) {
					input.val('');
				}
			})
		});
	
	}
	
	$('.contact-form').submit(function(e){
		var valid = '';
		var name = $('#contact-name');
		var mail = $('#contact-email');
		var url = $('#contact-url');
		var text = $('#contact-message');
		
		if (name.val().length < 1) {
			name.addClass('alert');
		}
		if (!mail.val().match(/^([a-z0-9._-]+@[a-z0-9._-]+\.[a-z]{2,4}$)/i)) {
			mail.addClass('alert');
		}
		if (text.val().length < 1) {
			text.addClass('alert');
		}
		else {
			var datastr = 'name=' + name.val() + '&mail=' + mail.val() + '&url=' + url.val() + '&text=' + text.val();
			$('.response').css('display', 'block').html('Sending message...').fadeIn('slow');
			setTimeout("send('"+datastr+"')", 2000);
		}
		e.preventDefault();
	});
});

function send(datastr){
	$.ajax({
		type: 'POST',
		url: 'mail.php',
		data: datastr,
		cache: false,
		success: function(html){
			$('.response').fadeIn('slow').html(html);
			$('input, textarea').removeClass('alert');
			setTimeout("$('.response').fadeOut('slow')", 2000);
		}
	});
}
