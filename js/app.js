$(document).ready(function() {
    $(".booking__select").select2({
        minimumResultsForSearch: Infinity
    });
});

var swiper = new Swiper('.swiper-container', {
    initialSlide: 1,
    pagination: {
      el: '.swiper-pagination',
    },
});

$(function() {
	var tab = $('.tab__cont > div'); 
	tab.hide().filter(':first').show(); 
	
	$('.tab__link').click(function(){
		tab.hide(); 
		tab.filter(this.hash).show(); 
		$('.tab__link').removeClass('active');
		$(this).addClass('active');
		return false;
	}).filter(':first').click();
});