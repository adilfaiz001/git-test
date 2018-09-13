//==============loading function=====================//

var start = new Date();
var t = 0;
$(window).load(function() {
   t = (new Date() - start);
});

$(document).ready(function()
{

    setTimeout(function(){
        $('body').addClass('loaded');
    },(t+1)*500);

});

//====================================================//









//====================Page utility function==============//

window.onscroll = function()
{
    navbarScroll();
    var speed = 2.5;
    document.getElementById("check").style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
};




/*=====Navigation Bar scroll function =======*/
function navbarScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.transform="translateY(0)";
        document.getElementById("navbar").style.transition="transform 0.4s"
    } else {
        document.getElementById("navbar").style.transform="translateY(-3.7em)";
        document.getElementById("navbar").style.transition="transform 0.4s";
    }
}
/*===========================================*/




/*========Slide left card====================*/
function p()
{
  document.getElementById('slide-left-menu').style.transform="translateX(-4em)";
  document.getElementById('slide-left-menu').style.transition="transform .45s cubic-bezier(.45,0,0,1)";

  document.getElementById("Burger").classList.add("st-1");
  setTimeout(del,400);
  document.getElementById("Burger").classList.add("st-2");
}

document.querySelector(".burger").onclick=function()
{
  if (document.querySelector(".st-2") != null)
  {
    document.getElementById('slide-left-menu').style.transform="translateX(-115.8%)";
    document.getElementById('slide-left-menu').style.transition="transform .45s cubic-bezier(.45,0,0,1)";
    document.getElementById("Burger").classList.add("st-1");
    setTimeout(del,400);
    document.getElementById("Burger").classList.remove("st-2");
    document.getElementById("sl-menu-items").classList.remove("slide-trans");
  }
  else
  {
    p();
    document.getElementById("sl-menu-items").classList.add("slide-trans");
  }
};

//st-2 hover for cross sign
/*
document.querySelector(".burger").onmouseover=function()
{
  if (document.querySelector(".st-2") != null)
  {
    document.getElementById("Burger").classList.add("hover");
  }
  if (document.querySelector(".st-2") != null)
  {
  document.querySelector(".burger").onmouseout=function()
  {
    document.getElementById("Burger").classList.remove("hover");
  }
}
};
*/

function del(){
  document.getElementById("Burger").classList.remove("st-1");
}

/*=============================================*/

//===================================================================//




















//======================Page Content utility==========================//


/*===============Parallax Background===================*/
function isInViewport(node) {
    var rect = node.getBoundingClientRect()
    return (
      (rect.height > 0 || rect.width > 0) &&
      rect.bottom >= 0 &&
      rect.right >= 0 &&
      rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.left <= (window.innerWidth || document.documentElement.clientWidth)
    )
  }

  $(window).scroll(function() {
    var scrolled = $(window).scrollTop()
    $('.parallax').each(function(index, element) {
      var initY = $(this).offset().top
      var height = $(this).height()
      var endY  = initY + $(this).height()

      // Check if the element is in the viewport.
      var visible = isInViewport(this)
      if(visible) {
        var diff = scrolled - initY
        var ratio = Math.round((diff / height) * 100)
        $(this).css('background-position','center ' + parseInt(-(ratio * 1.5)) + 'px')
      }
    });
  });
/*=======================================================*/




/*=================Scroll Animation======================*/

  $(window).scroll(function()
  {

    /*
     var el = function(element)
     {
       var hT = element.offsetTop;
       var hH = element.outerHeight();
        return{
          hT:hT,
          hH:hH
        };
     }
     var e = $('#Header1');
     var e_pos = el(e);
     console.log(e_pos.hT,e_pos.hH);
     */


     var wH = $(window).height(),
         wS = $(this).scrollTop();

     var hT = $('#Header1').offset().top,
         hH = $('#Header1').outerHeight();


     if ((wS+210) > (hT+hH-wH))
     {
       $(".cc1").addClass('con-code-slide');
     }

     var hT2 = $('#Header2').offset().top,
         hH2 = $('#Header2').outerHeight();

    if(wS+300>hT2+hH2-wH)
    {
      $('#pk-h1').addClass('pk-slide-rightin');
    }

    if ((wS+200) > (hT2+hH2-wH))
    {
      $('.progress').addClass('slide-up');
    }

    if(wS+180>hT2+hH2-wH){
      $('.py').addClass('python');
      $('.jv').addClass('java');
      $('.cp').addClass('cpp');
      $('.c').addClass('cc');
    }

    var hT3 = $('#Header3').offset().top,
        hH3 = $('#Header3').outerHeight();

    if(wS+100>hT3+hH3-wH)
    {
      $('.con-code2').addClass('cc2-animate');
    }

    var hT4 = $('#Header4').offset().top,
        hH4 = $('#Header4').outerHeight();

    if(wS+150>hT4+hH4-wH)
    {
      $('#web-h1').addClass('web-slide-rightin');
      $('#web-h2').addClass('web-slide-rightin2');

      $('.skills-wrapper').addClass('skills-slide-rightin');

      var i ;
      for(i = 1;i<=7;i=i+1)
      {
        $('.f-'+String(i)).addClass('fill'+String(i));
      }
      var j;
      for(j = 1;j<=5;j++)
      {
        $('.f2-'+String(j)).addClass('fill2-'+String(j));
      }
    }

    



      if(wS>4335)
      {
        $('.get-in-1').addClass('get-in-animate');
        $('.get-in-2').addClass('get-in-animate');
      }
      if(wS>=4474)
      {
        setTimeout(typeWriter,800);
      }



    //var x = parseInt($('.skills-wrapper').css('transform').split(',')[4]);

  });
/*=======================================================*/

//=====================================================================//









var i = 0;
var j = 0;
var k = 0;

var txt = 'Fill with your name';
var txt2 = 'Write your email';
var txt3 = 'now write your awesome message :D';

var speed = 25;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("fill-animate").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed+10);
  }
}

function email_write()
{
  if(j<txt2.length)
  {
    document.getElementById("fill-email-id").innerHTML += txt2.charAt(j);
    j++;
    setTimeout(email_write,speed);
  }
}

function msg_write()
{
  if(k < txt3.length)
  {
    document.getElementById('fill-msg-id').innerHTML += txt3.charAt(k);
    k++;
    setTimeout(msg_write,speed);
  }
}

function enabled_email()
{
  document.getElementById('Email').disabled = false ;
}
function enabled_msg()
{
  document.getElementById('Msg').disabled = false ;
}
function chr(ch,index)
{
  return ch.chartAt(index);
}

document.getElementById('Email').disabled = true ;
document.getElementById('Msg').disabled = true ;

$('.b1').prop('disabled', true);

var b1 = $('.b1');
var b2 = $('.b2');

/*
        $('.b1').click(function() {
          $('.email').addClass('active_in');
          $('.msg').addClass('msg-animate');
          enabled_msg();
          setTimeout(msg_write,800);
        });

*/

$('#label-1').click(function() {
  $('.fill-name').addClass('input1');
  $('#Name').focus();
  $('#Name').focusout(function() {
    $('.fill-name').removeClass('input1');
  });
});

var name_width;

$('#Name').on('keyup', function(event)
 {
    name_width = $('.wrape-name').width();
    if (this.value.length>0)
    {
      $('.wrape-name').addClass('wrape-name-div');
      $('#fill-animate').removeClass('fill-name');
    }
    if (this.value.length===0)
    {
      $('#fill-animate').addClass('fill-name');
    }
    if (this.value.length>=3)
    {
      b1.prop('disabled',false);
      b1.removeClass('bb1');
      b1.addClass('b-active');

      b1.click(function()
      {
            $('.line1').addClass('line-animate');
            $('.name').addClass('state-1');
            setTimeout(function(){$('.name').removeClass('state-1');},450);
            setTimeout(function(){
              $('.name').addClass('active_in');
              $('.email').addClass('email-animate');
              b1.removeClass('b-active');
              b1.addClass('bb1');
              $('.bb1').css('transition-duration', '0.5s');
              enabled_email();
              setTimeout(email_write,800);

            },500);
            setTimeout(function(){$('.line1').removeClass('line-animate');},500);



      });
    }
    if (this.value.length<3)
    {
      b1.prop('disabled',true);
      b1.removeClass('b-active');
      b1.addClass('bb1');
    }
    if (event.keyCode === 13)
    {
      $('.b1').click();
      $('#Name').blur();
      b1.removeClass('b-active');
      b1.addClass('bb1');
      $('.bb1').css('transition-duration', '0.5s');
    }

});

$('.anchor1').click(function(event) {
  /* Act on the event */

});

$('#label-2').click(function() {
  $('.fill-email').addClass('input2');
  $('#Email').focus();
  $('#Email').focusout(function() {
    $('.fill-email').removeClass('input2');
  });
});

var email_width;
var email_x;
$('#Email').on('keyup',function(event)
{
  email_width = $('.wrape-email').width();

  var gap = name_width - 102;
  var str = String(gap)+'px';
  email_x = gap;

  $('.wrape-email').css('z-index', '100');

  if (this.value.length>0)
  {
    $('.wrape-email').addClass('wrape-email-div');
    $('.wrape-email-div').css('transform', 'translateX('+str+')');
    $('#fill-email-id').removeClass('fill-email');
  }
  if (this.value.length===0)
  {
    $('#fill-animate').addClass('fill-email');
  }
  if (this.value.length>=3)
  {
    b1.prop('disabled',false);
    b1.removeClass('bb1');
    b1.addClass('b-active');

    b1.click(function()
    {
      $('.line2').addClass('line-animate');
      $('.email').addClass('state-1');
      setTimeout(function(){$('.email').removeClass('state-1');},450);
      setTimeout(function(){
        $('.email').addClass('active_in');
        $('.msg').addClass('msg-animate');
        enabled_msg();
        setTimeout(msg_write,800);
        b1.addClass('button-done');
        b1.removeClass('bb1');
      },500);
      setTimeout(function(){$('.line2').removeClass('line-animate');},1000);
    });
  }
  if (this.value.length<3)
  {

    b1.prop('disabled',true);
    b1.removeClass('b-active');
    b1.addClass('bb1');
  }

  if (event.keyCode === 13)
  {
    $('.b1').click();
    $('#Email').blur();
    b1.addClass('button-done');
    b1.removeClass('bb1');
  }

});



$('#label-3').click(function() {
  $('.fill-message').addClass('input3');
  $('#msg').addClass('msg1');
  $('#Msg').focus();
  $('#Msg').focusout(function() {
    $('.fill-message').removeClass('input3');
    $('#msg').removeClass('msg1');
  });
});

$('#Msg').on('keyup',function(event)
{
  console.log(email_x,email_width);

  var gap = email_width + email_x + 6;
  var str = String(gap)+'px';

  var b2 = $('.b2');

  $('.wrape-msg').css('z-index', '100');

  if (this.value.length>0)
  {
    b2.prop('disabled',false);
    b2.removeClass('bb2');
    b2.addClass('b-active');
    $('.wrape-msg').addClass('wrape-msg-div');
    $('.wrape-msg-div').css('transform', 'translateX('+str+') translateY(-22px)');
    b1.prop('disabled',false);
    $('#fill-msg-id').removeClass('fill-message');
  }
  if (this.value.length===0)
  {
    $('#fill-animate').addClass('fill-msg');
  }
  b2.click(function(event)
  {

      $('.box-3').addClass('box3-width');

      $('.line3').addClass('line-animate');

      $('.talk-form').addClass('state-1');

      $('.foot-header').addClass('state-2');

      setTimeout(function()
      {
        $('.talk-form').removeClass('state-1');
        $('.foot-header').removeClass('state-1');
      },600);
      setTimeout(function(){
        $('.talk-form').addClass('active_in');
        $('.foot-header').addClass('active_in');
        //$('.msg').addClass('msg-animate');
      },700);
    });
    /* Act on the event */
  if (event.keyCode === 13)
  {
    $('.b2').click();
  }

});
