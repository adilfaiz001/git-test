var start = new Date();
var t = 0;
$(window).load(function() {
   t = (new Date() - start);
});

console.log(t);
$(document).ready(function() {

    setTimeout(function(){
        $('body').addClass('loaded');
    },(t+1)*1000);

});




/*Navigation Bar scroll function */
function navbarScroll() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("navbar").style.transform="translateY(0)";
        document.getElementById("navbar").style.transition="transform 0.4s"
    } else {
        document.getElementById("navbar").style.transform="translateY(-3.7em)";
        document.getElementById("navbar").style.transition="transform 0.4s";
    }
}
/*Navigation Bar function Ends*/


//NOte: Sequence of function here in js should be in order of their function in page,they work according to their sequence as in programming.



//---------------Left Slide Card----------------------

//----------Cross sign Animation----------------
//Hover Over Element Bug
//Hover over burger causing st-1 and st-2 unstable
//need to isolate hover class for burger st-1 and st-2

/*document.querySelector(".burger").onmouseover=function()
{
  document.querySelector(".burger").classList.add("hover");
};

document.querySelector(".burger").onmouseout=function()
{
  document.querySelector(".burger").classList.remove("hover");
};
*/


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
//-----------Cross Animation Ends-----------------






//----------------Left Slide Card Ends-----------------------


/*Slide2 Content */



/*
var header2 = document.getElementById("Header2");
var header1 = document.getElementById("Header1");
var domRect = header2.getBoundingClientRect();
var domRect1 = header1.getBoundingClientRect();

function parallax() {
    var speed = 2.0;
    var t = domRect.top;
    var t1 = domRect1.top;
    console.log(t1);
    if(t1<113)
    {
      header1.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/5.0)+"px"
    }
    header2.style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/2.0)+"px";

  }*/


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
  })
})


//optimize scroll content with element position for different devices
  $(window).scroll(function() {
     var hT = $('#Header1').offset().top,
         hH = $('#Header1').outerHeight(),
         wH = $(window).height(),
         wS = $(this).scrollTop();
     if ((wS+120) > (hT+hH-wH))
     {
       $(".cc1").addClass('con-code-slide');
     }

     var hT2 = $('#Header2').offset().top,
         hH2 = $('#Header2').outerHeight();

    if ((wS+350) > (hT2+hH2-wH))
    {
      $('.progress').addClass('slide-up');
    }

    if(wS>2410)
    {
      $('#pk-h1').addClass('pk-slide-rightin');
    }

    if(wS>2508){
      $('.py').addClass('python');
      $('.jv').addClass('java');
      $('.cp').addClass('cpp');
      $('.c').addClass('cc');
    }

    if(wS>3070)
    {
      $('.con-code2').addClass('cc2-animate');
    }

    if(wS>3670)
    {
      $('#web-h1').addClass('web-slide-rightin');
      $('#web-h2').addClass('web-slide-rightin2');

      $('.skills-wrapper').addClass('skills-slide-rightin');
      var i ;
      for(i = 1;i<=8;i=i+1)
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

/*--------------footer-------*/









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




/*Event triggers */

window.onscroll = function()
{
    navbarScroll();
    var speed = 2.5;
    document.getElementById("check").style.backgroundPosition = (-window.pageXOffset/speed)+"px "+(-window.pageYOffset/speed)+"px";
};
