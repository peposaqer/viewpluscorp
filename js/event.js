$("nav .x-mark").on("click", function () {
  $("nav ul").hide();
  $("#check").prop("checked", false);
});

$(".open-nav").on("click", function () {
  $("nav ul").css("display", "block");
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

// if ($(".checkbtn").css("display") == "none") {
//   // hide navbar in footer only
//   $(document).ready(function () {
//     // $(".navbar").hide(); //Hide the navigation bar first
//     $(window).scroll(function () {
//       //Listen for the window's scroll event
//       if (isScrolledAfterElement("#footer")) {
//         //if it has scrolled beyond the #content elment
//         $("nav").fadeOut(); //Show the navigation bar
//       } else {
//         $("nav").fadeIn(); //Else hide it
//       }
//     });

//     //Function that returns true if the window has scrolled beyond the given element
//     function isScrolledAfterElement(elem) {
//       var $elem = $(elem);
//       var $window = $(window);
//       var docViewTop = $window.scrollTop();
//       var docViewBottom = docViewTop + $window.height();
//       var elemTop = $elem.offset().top;

//       return elemTop <= docViewBottom;
//     }
//   });
// }

$(document).ready(function () {
  $(".openModalBtn").on("click", function () {
    setTimeout(function () {
      $(".modal").css("padding-right", "0px");
      $(".modal").css("overflow", "hidden");
      galleryThumbs.update();
      galleryTop.update();
    }, 250);
  });
});


var galleryThumbs = new Swiper(".gallery-thumbs", {
  observe: true,
  observeParents: true,
  observeSlideChildren: true,
  spaceBetween: 20,
  slidesPerView: 10,
  loop: true,
  freeMode: true,
  loopedSlides: 5, //looped slides should be the same
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
  initialSlide: 1,
});
var galleryTop = new Swiper(".gallery-top", {
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
  spaceBetween: 20,
  loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: galleryThumbs,
  },
  initialSlide: 1,
});

  $(window).bind("load", function () {
    $("#work-in-progress").fadeOut(100);
  });

// Change Languages
var language;
// check langauge on loading page
function loadLang() {
  let lang_shor_name = localStorage.getItem("language");
  if (lang_shor_name === "ar") {
    arabicLang();
  } else {
    englishLang();
  }
}
// get Language
function getLanguage() {
  localStorage.getItem("language") == null ? setLanguage("en") : false;
  $.ajax({
    url: "language/" + localStorage.getItem("language") + ".json",
    dataType: "json",
    async: false,
    dataType: "json",
    success: function (lang) {
      language = lang;
    },
  });
}
// set Language
function setLanguage(lang) {
  localStorage.setItem("language", lang);
}
// change to English
$(".en").on('click', englishLang);
// change to Arabic
$(".arbic").on("click", arabicLang);

function arabicLang() {
  $(".chang").addClass("right-dir");
  getLanguage();
  $(".arbic").hide();
  $(".en").show();
  $("#check").prop("checked", false);
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#event_event_title").text(language.event_event_title);
  $("#event_event_dircation").text(language.event_event_dircation);
  $("#event_Lobortis_title").text(language.event_Lobortis_title);
  $("#event_Lobortis_span").text(language.event_Lobortis_span);
  $("#event_Lobortis_dircation").text(language.event_Lobortis_dircation);
  $("#openModal").text(language.openModal);
  $("#team_slider_dircation").text(language.team_slider_dircation);
  $("#footer_dircation").text(language.footer_dircation);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_find").text(language.footer_find);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_send").attr("placeholder", language.footer_input_send);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
  $(".navbar-brand").css({ float: "right" });
  $("nav ul").css({ float: "left"});
  $(".checkbtn").css({ float: "left" });
  $(".open-nav").css({ float: "left" });
  $(".di").css({ "padding-right": "2rem" });
  $(".footer form input").css({ padding: "0.5rem 0.5rem .5rem .5rem" });
  $(".linked").css({ "padding-left": "1rem" });
  $(".footer form textarea").css({ padding: "0.5rem 0.5rem .5rem .5rem" });

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1440px) { nav ul { direction: rtl; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1024px) { nav ul { direction: rtl; }}";
}

function englishLang() {
  $(".chang").removeClass("right-dir");
  getLanguage();
  $(".en").hide();
  $(".arbic").show();
  $("#check").prop("checked", false);
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#event_event_title").text(language.event_event_title);
  $("#event_event_dircation").text(language.event_event_dircation);
  $("#event_Lobortis_title").text(language.event_Lobortis_title);
  $("#event_Lobortis_span").text(language.event_Lobortis_span);
  $("#event_Lobortis_dircation").text(language.event_Lobortis_dircation);
  $("#openModal").text(language.openModal);
  $("#team_slider_dircation").text(language.team_slider_dircation);
  $("#footer_dircation").text(language.footer_dircation);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_send").attr("placeholder", language.footer_input_send);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_find").text(language.footer_find);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
  $(".navbar-brand").css({ float: "left", "text-align": "center" });
  $(".checkbtn").css({ float: "right" });
  $("nav ul").css({ float: "right"});

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1440px) { nav ul { direction: ltr; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1024px) { nav ul { direction: ltr; }}";

}