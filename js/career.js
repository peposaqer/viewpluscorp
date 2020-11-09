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

function showpor() {
  console.log("123");
  $(".openmodel").show();
  $("html, body").css({ overflow: "hidden" });
  $("body").css({ "background-color": "rgba(0,0,0,0.5)" });
  $(".slider").css({ hight: "100%" });
}

$(".apply3 .close-aplay2").on("click", function () {
  console.log("2");
  $(".openmodel").hide();
  $("html, body").css({ overflow: "visible" });
  $("body").css({ "background-color": "rgba(0,0,0,0.0)" });
});

$("nav .x-mark").on("click", function () {
  $("nav ul").hide();
  $("#check").prop("checked", false);
});

$(".open-nav").on("click", function () {
  $("nav ul").css("display", "block");
});

function removeActive(lkbhglkghjbeol) {
  let anchors = document.getElementsByClassName("nav-link");
  for (let anchor of anchors) {
    anchor.classList.remove("active");
  }
  console.log(lkbhglkghjbeol);
}

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

var language;
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
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#career_event_title").text(language.career_event_title);
  $("#career_event_dircation").text(language.career_event_dircation);
  $("#career_tabs_span").text(language.career_tabs_span);
  $("#career_tabs_span1").text(language.career_tabs_span1);
  $("#career_tabs_span2").text(language.career_tabs_span2);
  $("#career_tabs_span3").text(language.career_tabs_span3);
  $("#career_model_one1").text(language.career_model_two);
  $("#career_model_two").text(language.career_model_two);
  $("#career_model_three").text(language.career_model_three);
  $("#career_model_four").text(language.career_model_four);
  $("#career_model_five").text(language.career_model_five);
  $("#career_model_six").text(language.career_model_six);
  $("#career_model_seven").text(language.career_model_seven);
  $("#career_model_eight").text(language.career_model_eight);
  $("#career_model_nine").text(language.career_model_one);
  $("#career_model_ten").text(language.career_model_one);
  $("#career_model_title_one").text(language.career_model_title_one);
  $("#career_model_dircation_one").text(language.career_model_dircation_one);
  $("#career_model_title_two").text(language.career_model_title_two);
  $("#career_model_dircation_two").text(language.career_model_dircation_two);
  $("#team_slider_dircation").text(language.team_slider_dircation);
  $("#team_jion_title").text(language.team_jion_title);
  $("#team_jion_title1").text(language.team_jion_title1);
  $("#team_jion_dircation").text(language.team_jion_dircation);
  $("#openApplayForm").text(language.openApplayForm);
  $("#team_cv_title").text(language.team_cv_title);
  $("#team_cv_title").text(language.team_cv_title);
  $("#team_cv_drop_dircation").text(language.team_cv_drop_dircation);
  $("#team_cv_drop_dircation1").text(language.team_cv_drop_dircation1);
  $("#footer_dircation").text(language.footer_dircation);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_input_name").text(language.footer_input_name);
  $("#footer_input_Phone").text(language.footer_input_Phone);
  $("#footer_input_Email").text(language.footer_input_Email);
  $("#footer_input_message").text(language.footer_input_message);
  $("#footer_input_send").text(language.footer_input_send);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
  $("#footer_find").text(language.footer_find);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#portfolio").text(language.portfolio);
  $("#portfolio1").text(language.portfolio1);
  $("#portfolio2").text(language.portfolio2);
  $("#portfolio3").text(language.portfolio3);
  $("#footer_input_name1").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email1").attr("placeholder", language.footer_input_Email);
  $("#footer_input_message1").attr(
    "placeholder",
    language.footer_input_message
  );
  $("#footer_input_Phone1").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send1").attr("value", language.footer_input_send);
  $("#team_cv_Subject").attr("placeholder", language.team_cv_Subject);
  $("#footer_input_name2").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email2").attr("placeholder", language.footer_input_Email);
  $("#footer_input_message2").attr(
    "placeholder",
    language.footer_input_message
  );
  $("#footer_input_Phone2").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send2").attr("value", language.footer_input_send);
  $("#team_cv_Subject1").attr("placeholder", language.team_cv_Subject);
  $("#career_model_one1").text(language.career_model_one1);
}

function englishLang() {
  $(".chang").removeClass("right-dir");
  getLanguage();
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#career_event_title").text(language.career_event_title);
  $("#career_event_dircation").text(language.career_event_dircation);
  $("#career_tabs_span").text(language.career_tabs_span);
  $("#career_tabs_span1").text(language.career_tabs_span1);
  $("#career_tabs_span2").text(language.career_tabs_span2);
  $("#career_tabs_span3").text(language.career_tabs_span3);
  $("#career_model_two").text(language.career_model_two);
  $("#career_model_three").text(language.career_model_three);
  $("#career_model_four").text(language.career_model_four);
  $("#career_model_five").text(language.career_model_five);
  $("#career_model_six").text(language.career_model_six);
  $("#career_model_seven").text(language.career_model_seven);
  $("#career_model_eight").text(language.career_model_eight);
  $("#career_model_nine").text(language.career_model_one);
  $("#career_model_ten").text(language.career_model_one);
  $("#career_model_title_one").text(language.career_model_title_one);
  $("#career_model_dircation_one").text(language.career_model_dircation_one);
  $("#career_model_title_two").text(language.career_model_title_two);
  $("#career_model_dircation_two").text(language.career_model_dircation_two);
  $("#team_jion_title").text(language.team_jion_title);
  $("#team_jion_dircation").text(language.team_jion_dircation);
  $("#openApplayForm").text(language.openApplayForm);
  $("#team_cv_title").text(language.team_cv_title);
  $("#team_jion_title1").text(language.team_jion_title1);
  $("#team_cv_drop_dircation").text(language.team_cv_drop_dircation);
  $("#team_cv_drop_dircation1").text(language.team_cv_drop_dircation1);
  $("#team_cv_Subject").text(language.team_cv_Subject);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_input_name").text(language.footer_input_name);
  $("#footer_input_Phone").text(language.footer_input_Phone);
  $("#footer_input_Email").text(language.footer_input_Email);
  $("#footer_input_message").text(language.footer_input_message);
  $("#footer_input_send").text(language.footer_input_send);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_send").attr("placeholder", language.footer_input_send);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
  $("#footer_dircation").text(language.footer_dircation);
  $("#footer_find").text(language.footer_find);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#portfolio").text(language.portfolio);
  $("#portfolio1").text(language.portfolio1);
  $("#portfolio2").text(language.portfolio2);
  $("#portfolio3").text(language.portfolio3);
  $("#footer_input_name1").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email1").attr("placeholder", language.footer_input_Email);
  $("#footer_input_message1").attr(
    "placeholder",
    language.footer_input_message
  );
  $("#footer_input_Phone1").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send1").attr("value", language.footer_input_send);
  $("#team_cv_Subject").attr("placeholder", language.team_cv_Subject);
  $("#footer_input_name2").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email2").attr("placeholder", language.footer_input_Email);
  $("#footer_input_message2").attr(
    "placeholder",
    language.footer_input_message
  );
  $("#footer_input_Phone2").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send2").attr("value", language.footer_input_send);
  $("#team_cv_Subject1").attr("placeholder", language.team_cv_Subject);
  $("#career_model_one1").text(language.career_model_one1);
}