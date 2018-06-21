let opengallery_int = 0
let opengeo_int = 0
let neverscrollonclick = true
let getHeaderNowFirstUpScroll=false
let countscroll = false
let getheader = false
let gotheader = false
let aloneExpress =0
let aloneLumiere =0
let menuOpen= false
let vh = window.innerHeight/100

$(document).ready(function()
{
  $(window).scroll(function()
  {
    let vh = (window.innerHeight/100)*120
    if ($(this).scrollTop()> vh)
    {
      $(".description_Lumiere_full p").css({"animation":"opatxtintro 1s linear"})
      $(".description_Lumiere_full p").css({"opacity":"1"})
    }
  })
})
$(document).ready(function()
{
  $(window).scroll(function()
  {
    if ($(this).scrollTop()> 100)
    {
      $(".parallax_1").css({"opacity": "0.9" })
      $("#entrer").fadeOut()
    

    }
    else 
    {
      $(".parallax_1").css({"opacity": "1" })
      $("#entrer").fadeIn()
      $(".logo").fadeIn()
     }
  })
})
$('document').ready(function() {
var lastScrollTop = 0;
$(window).scroll(function(event){
   var st = $(this).scrollTop();
   if (st > lastScrollTop)
   {
       $("footer").css({"animation":"reverseOpa 0.3s linear"})
       $("footer").css({"opacity":"0.6"})
   }
   else if(st == lastScrollTop)
   {
     //do nothing 
     //In IE this is an important condition because there seems to be some instances where the last scrollTop is equal to the new one
   }
   else {
      
      $("footer").css({"animation":"myOpa 0.3s linear"})
      $("footer").css({"opacity":"0.9"})
   }
   lastScrollTop = st;
});});

$(document).ready(function()
{
  // Add smooth scrolling to all links
  $("a").on('click', function(event) 
  {
    if (this.hash !== "") 
    {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      }, 1000, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
let click_enter = 0
$(document).ready(function()
{
  // Add smooth scrolling to all links
  $("#entrer").on('click', function(event) 
  {
    click_enter+=1
    if (neverscrollonclick)
    {
      neverscrollonclick=false
      $(".desExpress").css({"animation":"fadeinright 1s linear"})
      $(".desLumiere").css({"animation":"fadeinright 1s linear"})
      $("#introTextPrez").css({"animation":"opa 1s linear"})
    }
    /*$.mobile.changePage.defaults.changeHash = false;*/
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") 
    {
      // Prevent default anchor click behavior
      event.preventDefault()

      // Store hash
      var hash = this.hash

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      }, 1300, function(){
   
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});
//recharge la page en haut
$(document).ready(function()
{
    $(this).scrollTop(0);
});
window.addEventListener("scroll", function (event) 
{
    var scroll = this.scrollY;
    if (scroll>200)
    {
      if (click_enter==0)
      {
        $("#introTextPrez").css({"animation":"opatxtintro 2s linear"})
        $("#introTextPrez").css({"opacity":"1"})
      }
      else
      {
        $("#introTextPrez").css({"opacity":"1"})
      }
    }
})
