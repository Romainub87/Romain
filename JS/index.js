// Etat initial de la page
$(document).on("ready", function () {
  $("#Presentation").hide();
  $(".coord").hide();
  $("#contacterTXT").text("Mes liens");
  $(".pres-proj").hide();
});

// Animation pour cacher/afficher l'image et le texte de présentation
$("#titre_encadre").on("click", function () {
  $("#Presentation").toggle(1000, "swing");
});

$(".image-proj").on("click", function () {
  $(".pres-proj").show();
  $(".image-proj").hide();
});

$(".pres-proj").on("click", function () {
  $(".pres-proj").hide();
  $(".image-proj").show();
});

$(".nav-btn").on("click", function () {
  $(".nav-links").toggleClass("mobile-menu");
});

