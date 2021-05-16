$("a.mp").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#mp").removeClass("d-none");
});

$("a.pentecost").on("click", function () {
  $("a").removeClass("active");
  $(this).addClass("active");
  $(".music").addClass("d-none");
  $("#pentecost").removeClass("d-none");
});

