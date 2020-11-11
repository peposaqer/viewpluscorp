$("nav .x-mark").on("click", function () {
  $("nav ul").hide();
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
    // width: 160,
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
  console.log($(".chang"))
  $(".chang").addClass("right-dir");
  getLanguage();
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#team_slider_dircation").text(language.team_slider_dircation);
  $("#team_jion_title").text(language.team_jion_title);
  $("#team_jion_dircation").text(language.team_jion_dircation);
  $("#openApplayForm").text(language.openApplayForm);
  $("#team_cv_title").text(language.team_cv_title);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_send").attr("placeholder", language.footer_input_send);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#footer_input_name1").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email1").attr("placeholder", language.footer_input_Email1);
  $("#footer_input_send1").attr("placeholder", language.footer_input_send);
  $("#footer_input_message1").attr(
    "placeholder",
    language.footer_input_message
  );
  $("#footer_input_Phone1").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send1").attr("value", language.footer_input_send);
  $("#team_cv_Subject").attr("placeholder", language.team_cv_Subject);
  $("#team_cv_drop_dircation").text(language.team_cv_drop_dircation);
  $("#footer_find").text(language.footer_find);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#footer_dircation").text(language.footer_dircation);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
  $(".navbar-brand").css({ float: "right" });
  $("nav ul").css({ float: "left", direction: "rtl" });
  $(".checkbtn").css({ float: "left" });
  $(".open-nav").css({ float: "left" });
  $(".di").css({ "padding-right": "2rem" });
  $(".footer form input").css({ padding: "0.5rem 0.5rem .5rem .5rem" });
  $(".footer form textarea").css({ padding: "0.5rem 0.5rem .5rem .5rem" });

}

function englishLang() {
  $(".chang").removeClass("right-dir");
  getLanguage();
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#team_slider_dircation").text(language.team_slider_dircation);
  $("#team_jion_title").text(language.team_jion_title);
  $("#team_jion_dircation").text(language.team_jion_dircation);
  $("#openApplayForm").text(language.openApplayForm);
  $("#team_cv_title").text(language.team_cv_title);
  $("#team_cv_title").text(language.team_cv_title);
  $("#footer_dircation").text(language.footer_dircation);
  $("#team_cv_drop_dircation").text(language.team_cv_drop_dircation);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email1").attr("placeholder", language.footer_input_Email1);
  $("#footer_input_send").attr("placeholder", language.footer_input_send);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#footer_input_name1").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_send1").attr("placeholder", language.footer_input_send);
  $("#footer_input_message1").attr(
    "placeholder",
    language.footer_input_message
  );
  $("#footer_input_Phone1").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send1").attr("value", language.footer_input_send);
  $("#team_cv_Subject").attr("placeholder", language.team_cv_Subject);
  $("#team_cv_Subject").text(language.team_cv_Subject);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_find").text(language.footer_find);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
      
  $(".navbar-brand").css({ float: "left", "text-align": "center" });
  $(".checkbtn").css({ float: "right" });
  $("nav ul").css({ float: "right", direction: "ltr" });
}