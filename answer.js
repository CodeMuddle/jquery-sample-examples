// 1. selecting menu
$('nav li:not(.dropdown)').on('click',function(){
	$('nav li').removeClass('active');
	$(this).addClass('active');
	if($(this).parents().has('li.dropdown')){
		$(this).parents().filter('li.dropdown').addClass('active');
	}
});