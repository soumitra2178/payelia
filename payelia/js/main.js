(function ($) {
	"use strict";

    jQuery(document).ready(function($){
		   
		   

            // mobile menu add class 
            $(".navbar-toggle").click(function(){
            $("body").addClass("mobile-menu");
            });

		

            // jQuery easing Scroll effect 
            // active code-1
            $('li.menu-item a').bind('click', function(event) {
            var $anchor = $(this);
            var headerH = '0';
            $('html, body').stop().animate({
            scrollTop : $($anchor.attr('href')).offset().top - headerH + "px"
            }, 1200, 'easeInOutQuad');

            event.preventDefault();
            });  

            /*Scroll Spy*/
            $('body').scrollspy({
            target : '.navbar-collapse',
            offset: 55,
            });

            //bootstrap mobile menu one cick hide
            $('.nav.navbar-nav').click(function(){
            $('.navbar-collapse').removeClass('in');
            });


            // jQuery sticky Menu
            $(".header").sticky({ topSpacing: 0 });
        
        
            // syotimer countdown js
            $('#countdowned_timer_event').syotimer({
            year: 2022,
            month: 12,
            day: 31,
            hour: 0,
            minute: 0,
            headTitle: '',
            footTitle: '',
            afterDeadline: function(syotimer){
            syotimer.bodyBlock.html('<p>The countdown is finished 00:00 2000.12.31</p>');
            syotimer.headBlock.html('<h3>Callback after the end of the countdown timer</h3>');
            syotimer.footBlock.html('<i style="color: brown;">Footer of timer after countdown is finished</i>');
            }
            });             
			
                    
			
            //particles background js
            particlesJS("particles-js",
            {"particles":{"number":
            {"value":80,"density":{"enable":true,"value_area":800}},
            "color":{"value":"#1CBC9C"},
            "shape":{"type":"circle","stroke":{"width":0,"color":"#000000"},
            "polygon":{"nb_sides":5},
            "image":{"src":"img/github.svg","width":100,"height":100}},
            "opacity":{"value":0.5,"random":false,
            "anim":{"enable":false,"speed":1,"opacity_min":0.1,"sync":false}},
            "size":{"value":3,"random":true,
            "anim":{"enable":false,"speed":40,"size_min":0.1,"sync":false}},
            "line_linked":{"enable":true,"distance":150,"color":"#ffffff","opacity":0.4,"width":1},
            "move":{"enable":true,"speed":6,
            "direction":"none",
            "random":false,
            "straight":false,
            "out_mode":"out",
            "bounce":false,
            "attract":{"enable":false,"rotateX":600,"rotateY":1200}}},
            "interactivity":{"detect_on":"canvas",
            "events":{"onhover":{"enable":true,"mode":"repulse"},
            "onclick":{"enable":true,"mode":"push"},
            "resize":true},"modes":{"grab":{"distance":400,"line_linked":{"opacity":1}},
            "bubble":{"distance":400,"size":40,"duration":2,"opacity":8,"speed":3},
            "repulse":{"distance":200,"duration":0.4},
            "push":{"particles_nb":4},
            "remove":{"particles_nb":2}}},
            "retina_detect":true});var count_particles, stats, update; stats = new Stats; stats.setMode(0);
            stats.domElement.style.position = 'absolute'; stats.domElement.style.left = '0px'; 
            stats.domElement.style.top = '0px';
            document.body.appendChild(stats.domElement); count_particles = document.querySelector('.js-count-particles');
            update = function() { stats.begin(); stats.end(); if (window.pJSDom[0].pJS.particles && window.pJSDom[0]
            .pJS.particles.array) { count_particles.innerText = window.pJSDom[0].pJS.particles.array.length; } 
            requestAnimationFrame(update); }; requestAnimationFrame(update);;
        

		
           //Bootstrap js
            $(".embed-responsive iframe").addClass("embed-responsive-item");
            $(".carousel-inner .item:first-child").addClass("active");

            $('[data-toggle="tooltip"]').tooltip();

            
		  
	

    });   			
	


    jQuery(window).load(function(){ // makes sure the whole site is loaded
        
            //preloader js
            $('#status').fadeOut(); // will first fade out the loading animation
            $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
            $('body').delay(350).css({
            'overflow': 'visible'
            });
        
            
            // wow js scroll efeact            
            var wow = new WOW(
            {
            boxClass:     'wow',      // animated element css class (default is wow)
            animateClass: 'animated', // animation css class (default is animated)
            offset:       0,          // distance to the element when triggering the animation (default is 0)
            mobile:       true,       // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            }
            );
            wow.init();
        
        
            // full vdeo background html5 video js	
            jQuery('.play').ContainerPlayer({
            overlay: { color: 'rgba(0,0,0,0.5)' },

            html5: {
            src: 'videos/video.mp4',
            poster: 'img/contact-bg.jpg',
            },

            }).on('video.playing video.paused video.loaded video.ended', function(e) {
            console.log(e);
            });


    });


}(jQuery));	