$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    
    if (scrolling > 130) {
        $(".fixed-bar").addClass("menu-fixed");
    }
    else {
        $(".fixed-bar").removeClass("menu-fixed");
    }
});







$(".login-open").click(function(){
    $("#login-part").fadeIn();
});

$(".login-cross").click(function(){
    $("#login-part").fadeOut();
});







$next = 1;			// fixed, please do not modfy;
	$current = 0;		// fixed, please do not modfy;
	$interval = 4000;	// You can set single picture show time;
	$fadeTime = 800;	// You can set fadeing-transition time;
	$imgNum = 4;		// How many pictures do you have
 
	$(document).ready(function(){
		//NOTE : Div Wrapper should with css: relative;
		//NOTE : img should with css: absolute;
		//NOTE : img Width & Height can change by you;
		$('.signup-img').css('position','relative');
		$('.signup-img img').css({
            'position':'absolute',
            'top':'150px',
            'left':'50%',
            'transform':'translateX(-50%)',
            'width':'auto',
            'height':'400px'
        });
 
		nextFadeIn();
	});
 
	function nextFadeIn(){
		//make image fade in and fade out at one time, without splash vsual;
		$('.signup-img img').eq($current).delay($interval).fadeOut($fadeTime)
		.end().eq($next).delay($interval).hide().fadeIn($fadeTime, nextFadeIn);
		    
		// if You have 5 images, then (eq) range is 0~4 
		// so we should reset to 0 when value > 4; 
		if($next < $imgNum-1){ $next++; } else { $next = 0;}
		if($current < $imgNum-1){ $current++; } else { $current =0; }
	};




//for banner background image slider
$('.blog-main').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 3,
  slidesToScroll: 3,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});




//for index categiry store slider
$('.category-parent').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});






//for index freelancer slider
$('.free-parent').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 1000,
  slidesToShow: 4,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});






//for inner page category slider
$('.category-slider').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 800,
  slidesToShow: 9,
  slidesToScroll: 9,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    }
  ]
});










//for inner page category slider
$('.banner-img').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  arrows: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});









//for inner page category slider
$('.store-banner').slick({
  dots: true,
  infinite: true,
  autoplay: false,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow: '<i class="fas fa-chevron-right dandik"></i>',
  nextArrow: '<i class="fas fa-chevron-left bamdik"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 575,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});






$(function() {  
    $(".category-scroll").niceScroll({
        cursorcolor: "#ff7060",
        cursorwidth: "0px",
        cursorborder: "0px solid #fff",
        emulatetouch: true,
    });
});





var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var panel = this.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    } 
  });
}




