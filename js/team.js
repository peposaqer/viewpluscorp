$("nav .x-mark").on("click", function () {
  $("nav ul").hide();
  console.log(gbajsdgbj);
  $("#check").prop("checked", false);
});

$(".open-nav").on("click", function () {
  $("nav ul").css("display", "block");
});

$("#openApplayForm").on("click", function () {
  console.log("sdlgnlsfgnlds");
  $(".cv").show();
  $("html, body").css({ overflow: "hidden" });
  $("body").css({ "background-color": "rgba(0,0,0,0.5)" });
});

$(".apply a").on("click", function () {
  console.log("1");
  $(".cv").hide();
  $("html, body").css({ overflow: "visible" });
  $("body").css({ "background-color": "rgba(0,0,0,0.0)" });
});


  var galleryThumbs = new Swiper(".gallery-thumbs", {
    spaceBetween: 10,
    slidesPerView: 4,
    loop: true,
    freeMode: true,
    loopedSlides: 4, //looped slides should be the same
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    width: 160,
    slidesPerView: "auto",
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      640: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
    },
  });
  var galleryTop = new Swiper(".gallery-top", {
    spaceBetween: 10,
    loop: true,
    loopedSlides: 5, //looped slides should be the same
    navigation: {
      nextEl: ".arrow-right",
      prevEl: ".arrow-left",
    },
    thumbs: {
      swiper: galleryThumbs,
    },
    
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
