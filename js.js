$(document).ready(function(){
  makeFixed("#AdSense1");
});

function makeFixed(item){
  var i=$(item);
  $(window).scroll(function(){
    var scrollTop= $(window).scrollTop();
    var dis=$(i).offset().top;
    var diff=scrollTop-dis;
    console.log(diff);
    if(diff>5){
      console.log(scrollTop);
      $(i).css({
        'position':'fixed',

      });
    }else{

      $(i).css({'position':'relative','z-index':1});

    }

  });
}
