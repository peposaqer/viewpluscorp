$("nav .x-mark").on("click", function () {
    $("nav ul").hide();
    $("#check").prop("checked", false);
});

$(".open-nav").on("click", function () {
    $("nav ul").css("display", "block");
});
