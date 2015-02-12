$(document).ready(function() {
    $('.contactComplete').hide(); //render the template on click instead when we have a backend

    $.scrollify({
        section: ".section"
    });

    $('#contactFormSubmit').click(function() {
      $('#contactFormContent').hide();
      $('.contactComplete').fadeIn('slow');
    });
});
