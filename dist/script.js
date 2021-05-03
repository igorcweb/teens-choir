$("a.mp").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#mp").removeClass("d-none");
});
$("a.e6").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#e6").removeClass("d-none");
});




