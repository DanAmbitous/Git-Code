$('#thePages').show();
$('#mainPage').hide();
$('#utilizationsPage').hide();
$('#overviewPage').hide();
$('#questionsAndAnswersPage').hide();
$('#webiste-page').hide();
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


/*
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

console.log(`The total is ${sum}`);
console.log(`The average is ${sum / count}`); */

var sum = 0;
var share =  0;

$('#table-website > tbody > tr').each(function(index,element) {
    let websites = $(this).find('td:eq(0)').html();
    $(this).find('td:eq(0)').html((index + 1) + ' - ' + websites);

    let numberOfUsers = $(this).find('td:eq(1)').html();
    $(this).find('td:eq(1)').html((index + 1) + ' - ' + numberOfUsers)

    let number = Number(numberOfUsers);

    $('#total-users').html(`Total users ${sum += number}`);
    $('GitHub-share').html(`About ${number} of the users are from GitHub`);
});

// The beginning of the links in the navigation bar

$('#main').click(function() {
    $('#thePages').show();
    $('#mainPage').show();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#webiste-page').hide();
    $('#bioPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();

});

$('#utilizations').click(function() {
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').show();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#webiste-page').hide();
    $('#bioPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});

$('#overview').click(function() {
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').show();
    $('#questionsAndAnswersPage').hide();
    $('#webiste-page').hide();
    $('#bioPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
})

$('#questionsAndAnswers').click(function() {
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').show();
    $('#webiste-page').hide();
    $('#bioPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
})

$("#websites").click(function() {
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#webiste-page').show();
    $('#bioPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});

$('#bio').click(function() {
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#webiste-page').hide();
    $('#bioPage').show();
    $('#signUpPage').hide();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});

$('#signUp').click(function() {
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#webiste-page').hide();
    $('#bioPage').hide();
    $('#signUpPage').show();
    $('#logInPage').hide();
    $('#forgotPassword').hide();
});


$('#logIn').click(function() {
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#webiste-page').hide();
    $('#bioPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').show();
    $('#forgotPassword').hide();
});

// This is the end of the links in the navigation bar