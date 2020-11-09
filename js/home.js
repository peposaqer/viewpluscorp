// Nav Menu
$("nav .x-mark").on("click", function () {
  $("nav ul").hide();
  $("#check").prop("checked", false);
});

$(".open-nav").on("click", function () {
  $("nav ul").css("display", "block");
});

// Partners Logos
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
        slidesToShow: 2,
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

  $(window).bind("load", function () {
    $("#work-in-progress").fadeOut(100);
  });

// Animation on Scroll
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

// Side menu show / hide
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

//show more button
$(".showmore").click(function () {
  $(".read").removeClass("hidden").fadeIn();
});

//show less button
$(".less").click(function () {
  $(".read").addClass("hidden").fadeIn();
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
  $("#header_dircation").text(language.header_dircation);
  $("#header_button").text(language.header_button);
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#Vision_title").text(language.Vision_title);
  $("#Vision_dircation").text(language.Vision_dircation);
  $("#Mission_title").text(language.Mission_title);
  $("#Mission_dircation").text(language.Mission_dircation);
  $("#Mission_button").text(language.Mission_button);
  $("#smart_title").text(language.smart_title);
  $("#smart_dircation").text(language.smart_dircation);
  $("#smart_button").text(language.smart_button);
  $("#Evaluation_title").text(language.Evaluation_title);
  $("#Evaluation_dircation").text(language.Evaluation_dircation);
  $("#Evaluation_button").text(language.Evaluation_button);
  $("#Veyolo_title").text(language.Veyolo_title);
  $("#Veyolo_dircation").text(language.Veyolo_dircation);
  $("#inon_title").text(language.inon_title);
  $("#inon_dircation").text(language.inon_dircation);
  $("#inon_button").text(language.inon_button);
  $("#partner_title").text(language.partner_title);
  $("#partner_dircation").text(language.partner_dircation);
  $("#footer_dircation").text(language.footer_dircation);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_find").text(language.footer_find);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_send").attr("placeholder", language.footer_input_send);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
  // $(".mage").css({ "left": "73rem", "text-align": "right" });
  // $(".Veyolo .veyolo-img img").css({ "margin-right": "5rem", "text-align": "right" });

  document.querySelector("style").textContent +=
    "@media screen and (max-width:320px) { .smart .mage { left: 15rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (max-width:320px) { .Evaluation .mage { left: 9rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:425px) { .smart .mage { left: 17rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:425px) { .Evaluation .mage { left: 11rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:768px) { .smart .mage { left: 37rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:768px) { .Evaluation .mage { left: 21rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1024p;x) { .smart .mage { left: 46rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1024px) { .Evaluation .mage { left: 46rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1024px) { .Veyolo .veyolo-img img { right: 3rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1440p;x) { .smart .mage { left: 61rem !important; }}";

  document.querySelector("style").textContent +=
    "@media screen and (min-width:1440px) { .Evaluation .mage { left: 61rem !important; }}";
}

function englishLang() {
  $(".chang").removeClass("right-dir");
  getLanguage();
  $("#header_dircation").text(language.header_dircation);
  $("#header_button").text(language.header_button);
  $("#home").text(language.home);
  $("#Event").text(language.Event);
  $("#team").text(language.team);
  $("#Career").text(language.Career);
  $("#Vision_title").text(language.Vision_title);
  $("#Vision_dircation").text(language.Vision_dircation);
  $("#Mission_title").text(language.Mission_title);
  $("#Mission_dircation").text(language.Mission_dircation);
  $("#Mission_button").text(language.Mission_button);
  $("#smart_title").text(language.smart_title);
  $("#smart_dircation").text(language.smart_dircation);
  $("#smart_button").text(language.smart_button);
  $("#Evaluation_title").text(language.Evaluation_title);
  $("#Evaluation_dircation").text(language.Evaluation_dircation);
  $("#Evaluation_button").text(language.Evaluation_button);
  $("#Veyolo_title").text(language.Veyolo_title);
  $("#Veyolo_dircation").text(language.Veyolo_dircation);
  $("#inon_title").text(language.inon_title);
  $("#inon_dircation").text(language.inon_dircation);
  $("#inon_button").text(language.inon_button);
  $("#partner_title").text(language.partner_title);
  $("#partner_dircation").text(language.partner_dircation);
  $("#footer_dircation").text(language.footer_dircation);
  $("#footer_follow_us").text(language.footer_follow_us);
  $("#footer_find").text(language.footer_find);
  $("#footer_find_riyadh").text(language.footer_find_riyadh);
  $("#footer_find_Jaddah").text(language.footer_find_Jaddah);
  $("#footer_find_Egypt").text(language.footer_find_Egypt);
  $("#footer_find").text(language.footer_find);
  $("#footer_product").text(language.footer_product);
  $("#footer_Sitemap").text(language.footer_Sitemap);
  $("#footer_Instagram").text(language.footer_Instagram);
  $("#footer_Contact").text(language.footer_Contact);
  $("#footer_input_name").attr("placeholder", language.footer_input_name);
  $("#footer_input_Email").attr("placeholder", language.footer_input_Email);
  $("#footer_input_send").attr("placeholder", language.footer_input_send);
  $("#footer_input_message").attr("placeholder", language.footer_input_message);
  $("#footer_input_Phone").attr("placeholder", language.footer_input_Phone);
  $("#footer_input_send").attr("value", language.footer_input_send);
  $("#footer_copy_one").text(language.footer_copy_one);
  $("#footer_copy_two").text(language.footer_copy_two);
  $("#home1").text(language.home1);
  $("#Event1").text(language.Event1);
  $("#team1").text(language.team1);
  $("#career1").text(language.career1);
  $(".mage").css({ left: "23rem", "text-align": "right" });
  $(".Veyolo .veyolo-img img").css({
    "margin-left": "5rem",
    "text-align": "right",
  });
}
