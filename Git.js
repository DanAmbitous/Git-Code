$('#thePages').show();
$('#mainPage').hide();
$('#utilizationsPage').hide();
$('#overviewPage').show();
$('#questionsAndAnswersPage').hide();
$('#bioPage').hide();

// The beginning of the links in the navigation bar

$('#main').click(function() {
    $('#mainPage').show();
    $('#thePages').show();
    $('#utilizationsPage').hide();
    $('#bioPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
});

$('#utilizations').click(function() {
    $('#utilizationsPage').show();
    $('#thePages').show();
    $('#mainPage').hide();
    $('#bioPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
});

$('#overview').click(function() {
    $('#overviewPage').show();
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#questionsAndAnswersPage').hide();
})

$('#questionsAndAnswers').click(function() {
    $('#questionsAndAnswersPage').show();
    $('#thePages').show();
    $('#bioPage').hide();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
})

$('#bio').click(function() {
    $('#bioPage').show();
    $('#thePages').show();
    $('#mainPage').hide();
    $('#utilizationsPage').hide();
    $('#questionsAndAnswersPage').hide();
});

// This is the end of the links in the navigation bar