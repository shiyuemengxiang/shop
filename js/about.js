$(function(){
   function isScrolledIntoView(elem) {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        if (elemTop + 50 < docViewBottom) {
            return true
        } else {
            return false
        }
    }



    function animateBot(item, time, callback) {
        $(item).delay(time).animate({'top': '650px'}, 1200, 'easeOutCubic', callback)
    }

    var floor1Init = false,
        boxElemets = $('.J_Box'),
		certs = $('.box_b');
		
	 
	 function animateInit(){
        $.each(boxElemets, function () {
            if ($(this).attr('init') == 'false' && isScrolledIntoView($(this))) {
                $(this).attr('init', 'true');
                $(this).animate({'left': '50%'}, 1000, 'easeOutCubic');
            }
        });
		
	 }
	 
	 
	 
	 // animateInit();
    $(window).scroll(function () {
        animateInit();
    });

})