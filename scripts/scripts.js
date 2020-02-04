
	$(window).scroll(function() {
    if ($(this).scrollTop() > 1){  
        $('.navbar').addClass("sticky");
    }
    else{
        $('.navbar').removeClass("sticky");
    }
});

$(document).ready
$('.carousel').carousel()