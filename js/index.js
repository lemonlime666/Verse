$(window).on('load', function(){
    let bannerH1Height = $('.main_pho h1').offset().top;
    let acc = $('header').offset().top;
    let bannerH1Outer = $('.main_pho h1').outerHeight();
    let bannerH1Inner = $('.main_pho h1').innerHeight();
    let openH1Height = $('.load h1').offset().top;
    console.log(bannerH1Height);
    console.log(openH1Height);

    $('.load img').fadeIn(800,"easeInOutSine");
    $('.load h1').delay(200).animate({
        opacity: [0.7,'easeInOutSine'],
    },800);
    $('.load img').delay(500).animate({
        opacity:[0,'easeInSine']
    });

    if($(window).width() > 576 && $(window).scrollTop() == 0){
        $('.load h1').delay(500).animate({
            top:-(openH1Height - bannerH1Height + bannerH1Outer + bannerH1Inner + 2),
        },1000);
    }else if($(window).width() <= 576 && $(window).width() > 473 && $(window).scrollTop() == 0){
        $('.load h1').delay(500).animate({
            top:-(openH1Height - bannerH1Height + bannerH1Outer + bannerH1Inner + 6),
        },1000);
    }else if($(window).width() <= 473 && $(window).scrollTop() == 0){
        $('.load h1').delay(500).animate({
            top:-(openH1Height - bannerH1Height + bannerH1Outer + 6),
        },1000);
    }else if($(window).scrollTop() >= 0){
        $('.load h1').animate({
            opacity:[0,'easeInSine']
        },1000);
    }

    $('.load').delay(2350).fadeOut(300,'easeInSine');

});
// $(document).mousemove(function(e){
//     console.log(e.pageY);
// });
// resizeChangeInnerText
$(window).resize(function(){
    let w = $(window).width();
    if(w <= 768){
        $('section.onlinestore div.seasonaltop h4').text('Seasonal Top5')
    }else if(w >768){
        $('section.onlinestore div.seasonaltop h4').text('Verse Collection Seasonal Top5')
    }

    if($(window).width() <= 996){
        $('li.nav2 a').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            $('ul.nav').css({display:'none',});
            $('#classlist').appendTo('.head_nav');
            $('#classlist').fadeIn(500);
            $('#classlist li').css({opacity:1,});
        }) 
    }else if($(window).width() > 996){
        $('li.nav2 a').click(function(){
            location.href = './readytowear.html';
        });
        $(".hamburger").removeClass("is-active");
        $('.head_nav').removeClass('navOn');
        $('ul.nav li').removeClass('clickOn');
        $('ul.nav').css({display:'flex',});
        $('#classlist').hide();
    };
});

$(".hamburger").click(function(){
    $(this).toggleClass("is-active");
});

$('.hamburger').click(function(){

    $('.head_nav').toggleClass('navOn');
    $('ul.nav li').toggleClass('clickOn');

});

$('.head_nav').click(function(e){
    e.stopPropagation;
    $(".hamburger").removeClass("is-active");
    $('.head_nav').removeClass('navOn');
    $('ul.nav li').removeClass('clickOn');
});


    if($(window).width() <= 996){
        $('li.nav2 a').click(function(e){
            e.preventDefault();
            e.stopPropagation();
            $('ul.nav').css({display:'none',});
            $('#classlist').appendTo('.head_nav');
            $('#classlist').fadeIn(500);
            $('#classlist li').css({opacity:1,});
        }); 
    }else if($(window).width() > 996){
        $('li.nav2 a').click(function(){
            location.href = './readytowear.html';
        });
        $(".hamburger").removeClass("is-active");
        $('.head_nav').removeClass('navOn');
        $('ul.nav li').removeClass('clickOn');
        $('ul.nav').css({display:'flex',});
        $('#classlist').hide();
    }

    $('#backham').click(function(e){
        e.preventDefault();
        e.stopPropagation();
        $('#classlist').hide();
        $('ul.nav').css({display:'flex',});
    });



    // 
    $('.classright').click(function(){
        $('.item:first-child').appendTo('#classroom');
    });

    $('.classleft').click(function(){
        $('.item:nth-child(7)').insertBefore('.item:first-child');
    });



    // clickeToChangePic
    $('.journeyimg1').click(function(){
        let w = $(window).width();

        $(this).addClass('j1');
        $(this).removeClass('j2');
        $('.journeyimg1').not(this).removeClass('j1');
        $('.journeyimg1').not(this).addClass('j2');
    });

    $('.journeyimg1:nth-child(5)').click(function(){
        $('.j2:nth-child(4)').css('margin-right','0px');
    });
    $('.journeyimg1').not('.journeyimg1:nth-child(5)').click(function(){
        let w = $(window).width();
        if(w < 1200){
            $('.j2:nth-child(4)').css('margin-right','30px');
        };
    });

    $('.journeyimg1:nth-child(3)').click(function(){
        let w = $(window).width();
        if(w<=576){
            $('.j2:nth-child(2)').css('margin-right','0px');
        };
    });
    $('.journeyimg1').not('.journeyimg1:nth-child(3)').click(function(){
        let w = $(window).width();
            if(w<=576){
            $('.j2:nth-child(2)').css('margin-right','30px');
            $('.j2:nth-child(3)').css('margin-right','0px');
        };
    });

    $('.journeyimg1:nth-child(4)').click(function(){
        let w = $(window).width();
        if(w<=576){
            $('.j2:nth-child(3)').css('margin-right','30px');
            $('.j2:nth-child(2)').css('margin-right','0px');
        };
    });
    $('.journeyimg1:nth-child(5)').click(function(){
        let w = $(window).width();
        if(w<=576){
            $('.j2:nth-child(3)').css('margin-right','30px');
            $('.j2:nth-child(2)').css('margin-right','0px');
            $('.journeytop div.journeyimg1:nth-child(5) div.journeypho1 img').css('height','80%')
            $('.journeytop div.journeyimg1:nth-child(5) div.journeypho1 img').css('width','auto')
        };
    });

// rwd_changeText
    $(document).ready(function(){
        let w = $(window).width();
        if(w <= 768){
            $('section.onlinestore div.seasonaltop h4').text('Seasonal Top5')
        };
    });


    // carousel
    $(document).ready(function(){
        
        divWidth = $('.banner').width();
        divHeight = $('.banner').height();
        imgCount = $('.carousel li').length;

        for(i=0; i<imgCount; i++){
            $('#contentButton').append(`<li></li>`);
        };
        $('#contentButton li:nth-child(1)').addClass("clickMe");//圓點亮白色加class

        $('#contentButton li').click(function(){
            index = $(this).index();
            
            $('.carousel').animate({
                left: `${index*(-100)}%`,
            });
    
            $(this).addClass('clickMe');
            $('#contentButton li').not(this).removeClass('clickMe');
        });

        let timer = $('#contentButton li').index()+1;
        setInterval(function(){

            divWidth = $('.banner').width();
            divHeight = $('.banner').height();
            imgCount = $('.carousel li').length;
            let len = $('.carousel li').length;
            
            if(timer<len){
                $('.carousel').animate({
                    left: `${timer*(-100)}%`,
                });
                timer++;
                
            }else if(timer == len){
                $('.carousel').animate({
                    left: 0,
                });
                timer=1;
            };

            $(`#contentButton li:nth-child(${timer})`).addClass('clickMe');
            $('#contentButton li').not(`#contentButton li:nth-child(${timer})`).removeClass('clickMe');
            
        }, 5500);
    
    });

    

    //scrollTop
    $(function () {

        let w = $(window).width();

        $(window).scroll(function(){

            var scrollVal = $(this).scrollTop();
            
            if(scrollVal > 60){
                $('header').css({
                    borderBottom:0,
                    backgroundColor:'rgba(238, 238, 238, 0.5)',
                })
            }else{
                $('header').css({
                    borderBottom:'2px solid grey',
                    backgroundColor:'rgba(179, 144, 112, .8)'
                })
            }
        });
    });

        //Get the button:
        mybutton = document.getElementById("myBtn");

        // When the user scrolls down 60px from the top of the document, show the button
        window.onscroll = function() {scrollFunction()};
    
        function scrollFunction() {
            if (document.body.scrollTop > 60 || document.documentElement.scrollTop > 60) {
            mybutton.style.display = "block";
            
            } else {
            mybutton.style.display = "none";
            
            }
        };
        
        $('#myBtn').click(function(){
            $('html,body').animate({
                scrollTop:0,
            },600)
        })

