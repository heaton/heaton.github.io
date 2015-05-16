$(function() {
  $('.chronology-nav ul li').click(function() {
    $('.active').removeClass('active');
    $('.movies .' + $(this).attr("data-video")).addClass('active');
    $(this).addClass('active');
  });

  $(document).keydown(function(e) {
    switch(e.keyCode) {
      case 37: e.preventDefault();$('.chronology-nav ul li.active').prev().click(); break;
      case 39: e.preventDefault();$('.chronology-nav ul li.active').next().click(); break;
    };
  });
});
