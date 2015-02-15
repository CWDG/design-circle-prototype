$(document).ready(function() {
    $.scrollify({
        section: ".section"
    });

    $("#about-link").click(function() {
        $.scrollify("move", 0)
    });

    $("#events-link").click(function() {
        $.scrollify("move", 1)
    });

    $("#news-link").click(function() {
        $.scrollify("move", 2)
    });

    $("#contact-link").click(function() {
        $.scrollify("move", 3)
    });
});
