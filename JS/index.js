// Etat initial de la page
$(document).on("ready", function () {
    $("#Presentation").hide();
    $("#InfosCoord").hide();
    $('#contacterTXT').text('Mes liens');
});

// Animation pour cacher/afficher l'image et le texte de présentation
$("#titre_encadre").on("click", function () {
    $("#Presentation").toggle(1000, "swing");
});

// Animation pour cacher/afficher les coordonnées et les liens
$("#contacterTXT").on("click", function () {
    $(".contact").toggle(1000, "swing");
    $("#InfosCoord").toggle(1000, "swing");
    if ($("#contacterTXT").text() == "Mes liens") {
        $("#contacterTXT").text("Mes coordonnées");
    } else {
        $('#contacterTXT').text('Mes liens');
    }
});

// Gestion des formes géométriques sur la page
$( '.draggable' ).draggable();
$( '.draggable' ).throwable();
$('.draggable').css({'z-index': -1})


