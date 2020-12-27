$('#thePages').show();
$('#mainPage').hide();
$('#utilizationsPage').hide();
$('#overviewPage').hide();
$('#questionsAndAnswersPage').hide();
$('#website-page').show();
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
    $(this).find('td:eq(0)').html((index + 1) + "-" + oldText);
});

/*var sum = 0;
var count = 0;

$('#table > tbody > tr').each(function(index, element) {
    let currentRating = $(this).find('td:eq(2)').html();
    let number = Number(currentRating);
    sum += number;
    count += 1;
});

console.log(`The total is ${sum}`);
console.log(`The average is ${sum / count}`);*/

//jQuery version of numbering a list of elements

var sum = 0;

$('#table-website > tbody > tr').each(function(index,element) {
    let websites = $(this).find('td:eq(0)').html();
    $(this).find('td:eq(0)').html((index + 1) + ' - ' + websites);

    let numberOfUsers = $(this).find('td:eq(1)').html();

    let number = Number(numberOfUsers);

    $('#total-users').html(`Total users ${sum += number}`);
});

/*

JS version of numbering a list of elements

let table = document.getElementById('table-website');

for (let index = 0; index < table.rows.length; index++) {
    if (index > 0) {
        const tr = table.rows[index];
        tr.cells[0].innerHTML = (index) + ' ' + tr.cells[0].innerHTML; 
        console.log(index);
    }
};

// This is a test

*/

let githubShare = parseInt($('#github-number').html());
let gitLabShare = parseInt($('#gitLab-number').html());
let bitBucketShare = parseInt($('#bitBucket-number').html());
let sourceForgeShare = parseInt($('#sourceForge-number').html());

let githubPercent = ((githubShare * 100) / sum).toFixed(2);
$('#GitHub-share').html(`GitHub is used by about ${githubPercent} % of the users`);
$('#GitHub-website').css('flex-basis', githubPercent + 'px');

let gitLabPercent = ((gitLabShare * 100) / sum).toFixed(2);
$('#GitLab-share').html(`GitLab is used by about ${((gitLabShare * 100) / sum).toFixed(2)} % of the users`);
$('#GitLab-website').css('flex-basis', gitLabPercent + 'px');

let bitBucketPercent = ((bitBucketShare * 100) / sum).toFixed(2);
$('#BitBucket-share').html(`BitBucket is used by about ${bitBucketPercent} % of the users`);
$('#BitBucket-website').css('flex-basis', bitBucketPercent + 'px');

let sourceForgePercent = ((sourceForgeShare * 100) / sum).toFixed(2);
$('#SourceForge-share').html(`SourceForge is used by about ${((sourceForgeShare * 100) / sum).toFixed(2)} % of the users`);
$('#SourceForge-website').css('flex-basis', sourceForgePercent + 'px');

// The beginning of the links in the navigation bar

$('#main').click(function() {
    $('#thePages').show();
    $('#mainPage').show();
    $('#utilizationsPage').hide();
    $('#overviewPage').hide();
    $('#questionsAndAnswersPage').hide();
    $('#website-page').hide();
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
    $('#website-page').hide();
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
    $('#website-page').hide();
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
    $('#website-page').hide();
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
    $('#website-page').show();
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
    $('#website-page').hide();
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
    $('#website-page').hide();
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
    $('#website-page').hide();
    $('#bioPage').hide();
    $('#signUpPage').hide();
    $('#logInPage').show();
    $('#forgotPassword').hide();
});

// This is the end of the links in the navigation bar

$('#clickButton').click(function() {
    alert('Hello')
});