// Cache selectors
var topMenu = $("#top-menu"),
  topMenuHeight = topMenu.outerHeight() + 15,
  // All list items
  menuItems = topMenu.find("a"),
  // Anchors corresponding to menu items
  scrollItems = menuItems.map(function () {
    var item = $($(this).attr("href"));
    if (item.length) {
      return item;
    }
  });

// Bind to scroll
$(window).scroll(function () {
  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop) return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";
  // Set/remove active class
  // menuItems
  //   .parent()
  //   .removeClass("active")
  //   .end()
  //   .filter("[href='#" + id + "']")
  //   .parent()
  //   .addClass("active");
});

$(".side--menu a").on("click", function () {
  $(".nav").find(".active").removeClass("active");
  $(this).parent().addClass("active");
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

  focusScrollMethod = function getFocus() {
    document.getElementById("myButton").focus({ preventScroll: false });
  };

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
});

// hide navbar in footer only
$(document).ready(function () {
  // $(".navbar").hide(); //Hide the navigation bar first
  $(window).scroll(function () {
    //Listen for the window's scroll event
    if (isScrolledAfterElement("#footer")) {
      //if it has scrolled beyond the #content elment
      $("nav").fadeOut(); //Show the navigation bar
    } else {
      $("nav").fadeIn(); //Else hide it
    }
  });

  //Function that returns true if the window has scrolled beyond the given element
  function isScrolledAfterElement(elem) {
    var $elem = $(elem);
    var $window = $(window);
    var docViewTop = $window.scrollTop();
    var docViewBottom = docViewTop + $window.height();
    var elemTop = $elem.offset().top;

    return elemTop <= docViewBottom;
  }
});

//show hidden

$(".showmore").click(function () {
  $(".read").removeClass("hidden").fadeIn();
});

//show hidden

$(".less").click(function () {
  $(".read").addClass("hidden").fadeIn();
});

// $smart = $("#smart");
// alert("Top: " + getPos($smart));

// function getPos(el) {
//   // yay readability
//   for (
//     var lx = 0, ly = 0;
//     el != null;
//     lx += el.offsetLeft, ly += el.offsetTop, el = el.offsetParent
//   );
//   return { x: lx, y: ly };
// }

// Add active class to the selcted div when click on it
$(".nav-link-side-navbar").on("click", function () {
  $(".nav-link-active").removeClass(" nav-link-active");
  this.className += " nav-link-active";
});

$(".navbar-light .navbar-toggler").on("click", function () {
  $(".navbar .collapse").css("display", "block !important");
});

$("nav .x-mark").on("click", function () {
  $("nav ul").hide();
  $("#check").prop("checked", false);
});

$(".open-nav").on("click", function () {
  $("nav ul").css("display", "block");
});
