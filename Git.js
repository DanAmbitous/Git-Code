$('#thePages').show();
$('#mainPage').hide();
$('#utilizationsPage').hide();
$('#overviewPage').hide();
$('#questionsAndAnswersPage').hide();
$('#bioPage').hide();
$('#signUpPage').hide();
$('#logInPage').show();

$('#forgotPasswordBtn').click(function() {
    $('#login-form').css('opacity', '.5');
    $('#forgotPassword').css('display', 'block');
});

$('#removeEmail').click(function() {
    $('#login-form').css('opacity', '1');
    $('#forgotPassword').css('display', 'none');
});


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
});

// This is the end of the links in the navigation bar