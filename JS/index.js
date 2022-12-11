// Etat initial de la page
$(document).on("ready", function () {
  $("#Presentation").hide();
  $(".coord").hide();
  $("#contacterTXT").text("Mes liens");
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

$(".draggable").draggable();
$(".draggable").throwable();
$(".draggable").css({"position": "absolute"});

