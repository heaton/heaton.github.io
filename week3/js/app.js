$(function() {
  $('.chronology-nav ul li').click(function() {
    $('.active').removeClass('active');
    $('.movies .' + $(this).attr("data-video")).addClass('active');
    $(this).addClass('active').parent().children().removeClass('show');
    $('.movies article').removeClass('at-left at-right');
    $('.movies .active').prevAll().addClass('at-left');
    $('.movies .active').nextAll().addClass('at-right');
  });

  function slide(direction) {
    var f = direction == 'left' ? 'prev' : 'next';
    $('.chronology-nav ul li.active')[f]().click();
  }

  $(document).keydown(function(e) {
    switch(e.keyCode) {
      case 37: e.preventDefault(); slide('left'); break;
      case 39: e.preventDefault(); slide('right'); break;
    };
  });

  $('.chronology-nav .menu').click(function() {
    $('.chronology-nav ul li').toggleClass('show');
  });

  var oriX;
  var touch = function(e) {
    var oe = e.originalEvent;
    return oe.touches[0] || oe.changedTouches[0];
  };
  var endEvent = function(e) {
    var moveDistance = touch(e).screenX - oriX;
    if(moveDistance > 30) {
      slide('left');
    } else if(moveDistance < -30) {
      slide('right');
    }
  };
  $('.movies article').on('touchstart', function(e) {
    oriX = touch(e).screenX;
  }).on('touchend', endEvent).on('touchcancel', endEvent);
});
