new WOW().init();

$('.to-top a').click(function(){
    $('html,body').animate({'scrollTop': 0,},1000);

    return false;
});

$(window).scroll(function(){
    if($(window).scrollTop()>200){
        $('.to-top a').show();
    }
    else (
        $('.to-top a').hide()
    );
})

$("a[href^='#']").click(function(e) {
	e.preventDefault();
	
	var position = $($(this).attr("href")).offset().top;

	$("body, html").animate({
		scrollTop: position
	} /* speed */ );
});


