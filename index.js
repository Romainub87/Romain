// Etat initial de la page
$(document).on("ready", function () {
  $("#Presentation").hide();
});

// Animation pour cacher/afficher l'image et le texte de présentation
$("#titre_encadre").on("click", function () {
  $("#Presentation").toggle(1000, "swing");
});

$("#Logo").on("click", function () {
  $("#Logo").css({
    "border-bottom-right-radius": "25px",
    "padding-left": "15%",
    "padding-right": "15%",
  });
  $("#logoEmplacement").css({
    "position":"relative",
    "margin":"auto"
  })
  $("#BarreNav").css({
    "position":"fixed"
  })
});
