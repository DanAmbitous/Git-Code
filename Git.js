$('#thePages').show();
$('#mainPage').hide();
$('#utilizationsPage').show();
$('#overviewPage').hide();
$('#questionsAndAnswersPage').hide();
$('#bioPage').hide();
$('#signUpPage').hide();
$('#logInPage').hide();

$('#forgotPasswordBtn').click(function() {
    $('#login-form').css('opacity', '.5');
    $('#forgotPassword').css('display', 'block');
});

$('#removeEmail').click(function() {
    $('#login-form').css('opacity', '1');
    $('#forgotPassword').css('display', 'none');
});

$('#table > tbody > tr').each(function(index, element) { 
    let oldText = $(this).find('td:eq(0)').html();
    console.log(oldText)
    $(this).find('td:eq(0)').html((index + 1) + "-" + oldText);
});

var sum = 0;
var count = 0;

$('#table > tbody > tr').each(function(index, element) {
    let currentRating = $(this).find('td:eq(2)').html();
    let number = Number(currentRating);
    sum += number;
    count += 1;
});

console.log('The sum is ' + sum);
console.log('The average is ' + (sum / count));

var sum = 0;
var count = 0;

console.log($('#table > tbody > tr'));

console.log('The sum is ' + sum);
console.log('The average is ' + (sum / count));

// The beginning of the links in the navigation bar

$('#main').click(function() {
    $('#mainPage').show();
    $('#thePages').show();
    $('#utilizationsPage').hide();
    $('#bioPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});

$('#utilizations').click(function() {
    $('#utilizationsPage').show();
    $('#thePages').show();
    $('#mainPage').hide();
    $('#bioPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});

$('#overview').click(function() {
    $('#overviewPage').show();
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#bioPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
})

$('#questionsAndAnswers').click(function() {
    $('#questionsAndAnswersPage').show();
    $('#thePages').show();
    $('#bioPage').hide();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
})

$('#bio').click(function() {
    $('#bioPage').show();
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});

$('#signUp').click(function() {
    $('#thePages').show();
    $('#signUpPage').show();
    $('#bioPage').hide();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});


$('#logIn').click(function() {
    $('#thePages').show();
    $('#logInPage').show();
    $('#signUpPage').hide();
    $('#bioPage').hide();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#forgotPassword').hide();
    $('#login-form').css('opacity', '1');
});

// This is the end of the links in the navigation bar