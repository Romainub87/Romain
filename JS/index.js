// Etat initial de la page
$(document).on("ready", function () {
  $("#Presentation").hide();
  $(".coord").hide();
  $("#contacterTXT").text("Mes liens");
});

// Animation pour cacher/afficher l'image et le texte de présentation
$("#titre_encadre").on("click", function () {
  $("#Presentation").toggle(1000, "swing");
  $(".click-on").toggle(1000, "swing");
});

$(".nav-btn").on("click", function () {
  $(".nav-links").toggleClass("mobile-menu");
});

$('.item-nav').on("click", function () {
  $(".nav-links").toggleClass("mobile-menu")
});

