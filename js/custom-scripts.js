$(function() {
  $('a[href*=#]:not([href=#])').not('.subMenu a, .workLink, .arrowDown, .graphic-one').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
$(function() {
  $('.workLink').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top - 20
        }, 1000);
        return false;
      }
    }
  });
});
$(function() {
  $('.arrowDown, .graphic-one').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1500, "easeInOutExpo");
        return false;
      }
    }
  });
});


$(document).ready(function() {
	
	if ($(window).width() < 1300) {
	   $('#master').addClass('responsive');
	}
	else {
	   $('#master').removeClass('responsive');
	}
	$(window).resize(function() {
		if ($(window).width() < 1300) {
			$('#master').addClass('responsive');
		}
		else {
			$('#master').removeClass('responsive');
		}
	});
	
	if ($(window).width() >= 768)	 {
		$('.content').mouseenter(function() {
			$(this).find('.bx-pager').stop();
			$(this).find('.bx-pager').fadeOut(0);
			$(this).find('.bx-pager').fadeIn(300);
		});
		$('.content').mouseleave(function() {
			$(this).find('.bx-pager').stop();
			$(this).find('.bx-pager').fadeIn(0);
			$(this).find('.bx-pager').fadeOut(300);
		});
	}
	
	if ($(window).width() <= 479) {
		$('.moreButton').click(function(){
			$('.more').addClass('active');
			$(this).hide();
		});
		
		$('.section5 .title').html("Pigeons aren't<br>the quickest<br>these days");
	}
	if ($(window).width() <= 767) {
		$('nav').click(function() {
			$('nav .menu').toggleClass('active');
			$('.sideNav').toggleClass('active');
		});
	}
	if ($(window).width() >= 768) {
		$('nav').mouseenter(function() {
			$('nav .menu').addClass('active');
			$('.nav-wrapper').stop();
			$('.nav-wrapper').slideUp(0);
			$('.nav-wrapper').slideDown(300);
		});
		$('nav').mouseleave(function() {
			$('nav .menu').removeClass('active');
			$('.nav-wrapper').stop();
			$('.nav-wrapper').slideDown(0);
			$('.nav-wrapper').slideUp(300);
		});
	}
	
	
	$('.storyLink').click(function(){
		$('.loveToLearn, .andPlay').delay(1200).animate({'opacity':'1'},600);
	});
	
	$('.accordion h2.title').click(function(){
		$('.accordion').removeClass('active');
		$(this).parent().addClass('active');
	});
	$('.section4').on('click', '.accordion.active .close', function() {
		$('.accordion').removeClass('active');
	});
	$('.section4').on('click', '.accordion:not(.active) .close', function() {
		$('.accordion').removeClass('active');
		$(this).parent().addClass('active');
	});
	
	/*$('.arrowDown').click(function(){
		$('html, body').animate({scrollTop: $("#job-one").offset().top-70},3000,"easeInOutSine");
	});*/
	
	$('.arrowDown').mouseenter(function() {
		$(this).find('.black').stop();
		$(this).find('.black').fadeIn(0);
		$(this).find('.black').fadeOut(500);
	});
	$('.arrowDown').mouseleave(function() {
		$(this).find('.black').stop();
		$(this).find('.black').fadeOut(0);
		$(this).find('.black').fadeIn(500);
	});
	
	window.addEventListener("scroll", function(e) {
		var scrollTop = $(window).scrollTop() + 270;
		
		var sectionOneT = $('#section1').offset().top;
		var sectionOneB = $('#section1').offset().top + $('#section1').innerHeight();
		if (scrollTop > sectionOneT && scrollTop < sectionOneB) { $('.nav-item.first').addClass('active'); }
		else { $('.nav-item.first').removeClass('active'); }
		
		var sectionTwoT = $('#work').offset().top;
		var sectionTwoB = $('#work').offset().top + $('#work').innerHeight();
		if (scrollTop > sectionTwoT && scrollTop < sectionTwoB) { $('.nav-item.second').addClass('active'); }
		else { $('.nav-item.second').removeClass('active'); }
		
		var sectionThreeT = $('.section3').offset().top;
		var sectionThreeB = $('.section3').offset().top + $('.section3').innerHeight();
		if (scrollTop > sectionThreeT && scrollTop < sectionThreeB) { $('.nav-item.third').addClass('active'); }
		else { $('.nav-item.third').removeClass('active'); }
		
		var sectionFourT = $('.section4').offset().top;
		var sectionFourB = $('.section4').offset().top + $('.section4').innerHeight();
		if (scrollTop > sectionFourT && scrollTop < sectionFourB) { $('.nav-item.fourth').addClass('active'); }
		else { $('.nav-item.fourth').removeClass('active'); }
		
		var sectionFiveT = $('.section5').offset().top;
		var sectionFiveB = $('.section5').offset().top + $('.section5').innerHeight();
		if (scrollTop > sectionFiveT && scrollTop < sectionFiveB) { $('.nav-item.last').addClass('active'); }
		else { $('.nav-item.last').removeClass('active'); }
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('.nav-item.fourth').removeClass('active');
			$('.nav-item.last').addClass('active');
		}
		
		var sectionTwoTop = $('.section2').offset().top -60;
		var sectionTwoBottom = $('.section2').offset().top + $('.section2').innerHeight() - 500;
		if ( $(window).scrollTop() > sectionTwoTop && $(window).scrollTop() < sectionTwoBottom ) {
			$('nav .menu').addClass('fadeToGrey');
		} else {
			$('nav .menu').removeClass('fadeToGrey');
		}
		
		var scrollDist = $(window).scrollTop();
		var jobs = $('.section2 .content');
		var myStory = $('#myStory');
		var cv = $('#cv');
		if (scrollDist > jobs.eq(0).offset().top) { $('.arrowDown').removeClass('first'); }
		else { $('.arrowDown').addClass('first'); }
		if(scrollDist < jobs.eq(0).offset().top)
			{ $('.arrowDown').attr('href', '#job-one'); }
		if(scrollDist >= jobs.eq(0).offset().top && scrollDist < (jobs.eq(0).innerHeight()+jobs.eq(0).offset().top))
			{ $('.arrowDown').attr('href', '#job-two'); }
		if(scrollDist >= jobs.eq(1).offset().top && scrollDist < (jobs.eq(1).innerHeight()+jobs.eq(1).offset().top))
			{ $('.arrowDown').attr('href', '#job-three'); }
		if(scrollDist >= jobs.eq(2).offset().top && scrollDist < (jobs.eq(2).innerHeight()+jobs.eq(2).offset().top))
			{ $('.arrowDown').attr('href', '#job-four'); }
		if(scrollDist >= jobs.eq(3).offset().top && scrollDist < (jobs.eq(3).innerHeight()+jobs.eq(3).offset().top))
			{ $('.arrowDown').attr('href', '#job-five'); }
		if(scrollDist >= jobs.eq(4).offset().top && scrollDist < (jobs.eq(4).innerHeight()+jobs.eq(4).offset().top))
			{ $('.arrowDown').attr('href', '#job-six'); }
		if(scrollDist >= jobs.eq(5).offset().top && scrollDist < (jobs.eq(5).innerHeight()+jobs.eq(5).offset().top))
			{ $('.arrowDown').attr('href', '#job-seven'); }
		if(scrollDist >= jobs.eq(6).offset().top && scrollDist < (jobs.eq(6).innerHeight()+jobs.eq(6).offset().top))
			{ $('.arrowDown').attr('href', '#job-eight'); }
		if(scrollDist >= jobs.eq(7).offset().top && scrollDist < (jobs.eq(7).innerHeight()+jobs.eq(7).offset().top))
			{ $('.arrowDown').attr('href', '#job-nine'); }
		if(scrollDist >= jobs.eq(8).offset().top && scrollDist < (jobs.eq(8).innerHeight()+jobs.eq(8).offset().top))
			{ $('.arrowDown').attr('href', '#job-ten'); }
		if(scrollDist >= jobs.eq(9).offset().top && scrollDist < (jobs.eq(9).innerHeight()+jobs.eq(9).offset().top))
			{ $('.arrowDown').attr('href', '#job-eleven'); }
		if(scrollDist >= jobs.eq(10).offset().top && scrollDist < myStory.offset().top) {
			$('.arrowDown').attr('href', '#myStory');
			$('.arrowDown').addClass('last');
		} else { $('.arrowDown').removeClass('last'); }
		if(scrollDist >= myStory.offset().top && scrollDist < sectionFourB)
			{ $('.arrowDown').attr('href', '#cv'); }
		if(scrollDist >= cv.offset().top && scrollDist < sectionFiveB)
			{ $('.arrowDown').attr('href', '#contact'); }
			
		$('.arrowDown.last').click(function(){
			$('.loveToLearn, .andPlay').delay(1500).animate({'opacity':'1'},600);
		});
		
		
		var workHeight = $('#work').height();
		if ($(window).width() >= 950) {
		   if ($(window).scrollTop() > 2700 && $(window).scrollTop() < (sectionThreeT-400)) {
				$('body').addClass('fadeToGrey');
			}
			else {
				$('body').removeClass('fadeToGrey');
			}
		}
		if ($(window).width() < 950 && $(window).width() >= 768) {
		   if ($(window).scrollTop() > 2400 && $(window).scrollTop() < (workHeight+1000)) {
				$('body').addClass('fadeToGrey');
			}
			else {
				$('body').removeClass('fadeToGrey');
			}
		}
		if ($(window).width() < 768 && $(window).width() >= 480) {
		   if ($(window).scrollTop() > 2000 && $(window).scrollTop() < (workHeight+1000)) {
				$('body').addClass('fadeToGrey');
			}
			else {
				$('body').removeClass('fadeToGrey');
			}
		}
		
		
		if ($(window).width() >= 950) {
		   if ($(window).scrollTop() > (sectionThreeT-400)) {
				$('.section2').addClass('fadeToWhite');
			}
			else {
				$('.section2').removeClass('fadeToWhite');
			}
		}
		if ($(window).width() < 950 && $(window).width() >= 768) {
		   if ($(window).scrollTop() > (workHeight+1750)) {
				$('.section2').addClass('fadeToWhite');
			}
			else {
				$('.section2').removeClass('fadeToWhite');
			}
		}
		if ($(window).width() < 768 && $(window).width() >= 480) {
		   if ($(window).scrollTop() > (workHeight+1000)) {
				$('.section2').addClass('fadeToWhite');
			}
			else {
				$('.section2').removeClass('fadeToWhite');
			}
		}
		
		
        $('.pins').each( function(i){
            var bottom_of_object = $(this).offset().top + $(this).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height();
            bottom_of_window = bottom_of_window - 50;  
          
            if( bottom_of_window > bottom_of_object ){
                $(this).animate({'opacity':'1'},600);
            }
        });
		if( $('.pin11').css('opacity') == 1 ){
			$('.loveToLearn, .andPlay').animate({'opacity':'1'},600);
		}
		
		if($(window).scrollTop() + $(window).height() == $(document).height()) {
			$('#line-path3').css('stroke-dashoffset', '0px');
		}
    });
	
	$( window ).scroll(function() {
		$('.arrowDown').hide();
		clearTimeout( $.data( this, "scrollCheck" ) );
		$.data( this, "scrollCheck", setTimeout(function() {
			$('.arrowDown').show();
		}, 250) );
	});
	
});