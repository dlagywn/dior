$(document).ready(function(){    
  AOS.init();

  $('.menu-box').mouseenter(function(){
     $('.sub-menu-box').addClass('active');
  });

  $('.sub-menu-box').mouseleave(function(){
    $('.sub-menu-box').removeClass('active');
    
    
  });

  //햄버거 버튼
  $('#hamburger').click(function(){
    $(this).toggleClass('active');
    $('#hamburger span').toggleClass('active');
    $('.menu-box').toggleClass('active');
  });
});