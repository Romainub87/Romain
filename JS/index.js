// Etat initial de la page
$(document).on("ready", function() {
    $("#Presentation").hide();
});

// Animation pour cacher/afficher l'image et le texte de présentation
$("#titre_encadre").on("click", function() {
    $("#Presentation").toggle(1000, "swing");
});