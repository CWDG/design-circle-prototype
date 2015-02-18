$(document).ready(function() {
    $('.contactComplete').hide(); //render the template on click instead when we have a backend
    $('.blogArchives').hide();

    $.scrollify({
        section: ".section"
    });

    $('#contactFormSubmit').click(function() {
      $('#contactFormContent').hide();
      $('.contactComplete').fadeIn('slow');
    });

    $('#blogArchivesLink').click(function() {
      $('#blogContent').hide();
      $('.blogArchives').fadeIn('slow');
    });

    $('#exitBlogArchives').click(function() {
      $('.blogArchives').hide();
      $('#blogContent').fadeIn('slow');
    })
});
