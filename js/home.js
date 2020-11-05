$("nav .x-mark").on("click", function () {
  $("nav ul").hide();
  $("#check").prop("checked", false);
});

$(".open-nav").on("click", function () {
  $("nav ul").css("display", "block");
});

$(".customer-logos").slick({
  slidesToShow: 6,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 1000,
  arrows: false,
  dots: false,
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 4,
      },
    },
    {
      breakpoint: 520,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

$(document).ready(function () {
  AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 120, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1500, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: false, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
  });
});

// // hide navbar in footer only
// $(document).ready(function () {
//   // $(".navbar").hide(); //Hide the navigation bar first
//   $(window).scroll(function () {
//     //Listen for the window's scroll event
//     if (isScrolledAfterElement("#footer")) {
//       //if it has scrolled beyond the #content elment
//       $("nav").fadeOut(); //Show the navigation bar
//     } else {
//       $("nav").fadeIn(); //Else hide it
//     }
//   });

//   //Function that returns true if the window has scrolled beyond the given element
//   function isScrolledAfterElement(elem) {
//     var $elem = $(elem);
//     var $window = $(window);
//     var docViewTop = $window.scrollTop();
//     var docViewBottom = docViewTop + $window.height();
//     var elemTop = $elem.offset().top;

//     return elemTop <= docViewBottom;
//   }
// });

$("#smart-nav").css("visibility", "collapse");
$("#Evaluation-nav").css("visibility", "collapse");
$("#Veyolo-nav").css("visibility", "collapse");
$("#inon-nav").css("visibility", "collapse");

defaultOffset = 250;

document.onscroll = function () {
  if (
    window.scrollY >= $("#smart").offset().top - defaultOffset &&
    window.scrollY <=
      $("#smart").offset().top + $("#smart").height() - defaultOffset
  ) {
    $("#smart-nav").css("visibility", "visible");
    $("#Evaluation-nav").css("visibility", "collapse");
    $("#Veyolo-nav").css("visibility", "collapse");
    $("#inon-nav").css("visibility", "collapse");
  } else if (
    window.scrollY >= $("#Evaluation").offset().top - defaultOffset &&
    window.scrollY <=
      $("#Evaluation").offset().top + $("#Evaluation").height() - defaultOffset
  ) {
    $("#smart-nav").css("visibility", "collapse");
    $("#Evaluation-nav").css("visibility", "visible");
    $("#Veyolo-nav").css("visibility", "collapse");
    $("#inon-nav").css("visibility", "collapse");
  } else if (
    window.scrollY >= $("#Veyolo").offset().top - defaultOffset &&
    window.scrollY <=
      $("#Veyolo").offset().top + $("#Veyolo").height() - defaultOffset
  ) {
    $("#smart-nav").css("visibility", "collapse");
    $("#Evaluation-nav").css("visibility", "collapse");
    $("#Veyolo-nav").css("visibility", "visible");
    $("#inon-nav").css("visibility", "collapse");
  } else if (
    window.scrollY >= $("#inon").offset().top - defaultOffset &&
    window.scrollY <=
      $("#inon").offset().top + $("#inon").height() - defaultOffset
  ) {
    $("#smart-nav").css("visibility", "collapse");
    $("#Evaluation-nav").css("visibility", "collapse");
    $("#Veyolo-nav").css("visibility", "collapse");
    $("#inon-nav").css("visibility", "visible");
  } else {
    $("#smart-nav").css("visibility", "collapse");
    $("#Evaluation-nav").css("visibility", "collapse");
    $("#Veyolo-nav").css("visibility", "collapse");
    $("#inon-nav").css("visibility", "collapse");
  }
};



//show hidden

$(".showmore").click(function () {
  $(".read").removeClass("hidden").fadeIn();
});

//show hidden

$(".less").click(function () {
  $(".read").addClass("hidden").fadeIn();
});