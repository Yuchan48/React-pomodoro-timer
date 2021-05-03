//lesson6 bilding a jQuery image slider
"use strict";

/*var myInterval = setInterval(function (){
    console.log(new Date());
}, 1000);
clearInterval(myInterval);  will clear the setInterval() 
*/

// $(selector).animate(obj, time, callback)

//slide to left
//$("#slider .slides").animate({"margin-left": -720}, 1000);

//keep sliding until it's -720
//$("#slider .slides").animate({"margin-left": "-=720"}, 1000);

$(function () {
  //configuration
  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;

  //cache DOM
  var $slider = $("#slider");
  var $sliderContainer = $slider.find(".slides");
  var $slides = $sliderContainer.find(".slide");

  var interval;

  function startSlider() {
    //setInterval
    //animate margin-left
    interval = setInterval(function () {
      $sliderContainer.animate(
        { "margin-left": "-=" + width },
        animationSpeed,
        function () {
          //if it's last slide, go to position : 1 (0px);
          currentSlide++;
          if (currentSlide === $slides.length) {
            currentSlide = 1;
            $sliderContainer.css("margin-left", 0);
          }
        }
      );
    }, pause);
  }

  function stopSlider() {
    clearInterval(interval);
  }

  //listen for mouseenter and pause
  //resume on mouseleave
  $sliderContainer.on("mouseenter", stopSlider).on("mouseleave", startSlider);

  startSlider();
});
