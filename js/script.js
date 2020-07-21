$(function() {
  // toTop
  $('#to_top').on('click', function() {
    $('html,body').animate({scrollTop: 0}, 500, 'swing');
  });

  // footerBtn
  const footBtn = $('.action_fixed');    
	footBtn.hide();
	$(window).scroll(function () {
		if ($(this).scrollTop() > 550) {
			footBtn.fadeIn();
		} else {
			footBtn.fadeOut();
		}
  });
  
  // navBtn
  const menuBtn = $('.menu_btn');
  const menuList = $('.menu');
  const menuItem = $('.menu li');
  const overLay = $('aside');
  
  menuBtn.on('click', function() {
    $(this).toggleClass('active');
    overLay.toggleClass('overlay');
    if (menuList.css('display') === 'block') {
      menuList.slideUp('1000');
    } else {
      menuList.slideDown('1000');
    }
  });

  menuItem.on('click', function() {
    menuBtn.removeClass('active');
    menuList.slideUp('1000');
    overLay.removeClass('overlay');
    const i = menuItem.index(this);
    const p = $("section").eq(i + 1).offset().top;
    $('html,body').animate({ scrollTop: p }, '1000');
    return false;
  });
});