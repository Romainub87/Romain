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

// Animation pour cacher/afficher les coordonnées et les liens
$("#contacterTXT").on("click", function () {
  if ($("#contacterTXT").text() == "Mes liens") {
    $("#contacterTXT").text("Mes coordonnées");
    $(".contact").hide();
    $(".coord").show();
  } else {
    $("#contacterTXT").text("Mes liens");
    $(".contact").show();
    $(".coord").hide();
  }
});

$(".image-proj").on("click", function () {
  $(".pres-proj").show();
  $(".image-proj").hide();
});

$(".pres-proj").on("click", function () {
  $(".pres-proj").hide();
  $(".image-proj").show();
});

