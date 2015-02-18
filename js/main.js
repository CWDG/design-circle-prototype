$(document).ready(function() {
    $('.contactComplete').hide(); //render the template on click instead when we have a backend
    $('.blogArchives').hide();

    $.scrollify({
        section: ".section"
    });

    $('#contactFormSubmit').click(function() {
      swal("Sumbission Successful!", "We'll get back to you as soon as we can", "success");
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
