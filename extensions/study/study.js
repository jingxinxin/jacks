$(function(){function i(){180==window.orientation||0==window.orientation,90==window.orientation||window.orientation==-90;var i=$(".tab-content").children(":visible").children().width();t.height(1.414*i)}var t=$(".card");window.addEventListener("onorientationchange"in window?"orientationchange":"resize",i,!1),$(window).load(function(){var i=$(".tab-content").children(":visible").children().width();t.height(1.414*i)}),$(".tab-block").on("click",function(i){if(!$(this).hasClass("slider")){var t=$(this).index();$("#tab-content-"+(t+1)).siblings().hide().end().show();var n=32*t;$(".slider").css({left:n+"%"}),$(".ripple").remove();var e=$(this).offset().left,o=$(this).offset().top,a=$(this).width(),s=$(this).height();$(this).prepend("<span class='ripple'></span>"),a>=s?s=a:a=s;var h=i.pageX-e-a/2,r=i.pageY-o-s/2;$(".ripple").css({width:a,height:s,top:r+"px",left:h+"px"}).addClass("rippleEffect")}})});