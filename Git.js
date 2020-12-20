$(function() {
    $('form').prepend('The form is still being worked');
});

$(function() {
    let form = $('<h5></h5>').text('For more information, you can send questions here');
    $('form').after(form)
});

$(function() {
    $(console.log('This works'));
});