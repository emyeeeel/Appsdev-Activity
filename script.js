const form = document.getElementById('user-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const age = document.getElementById('user-age').value;
    const dropdown = document.getElementById('user-dropdown').value;
    const recommendation = document.querySelector('input[name="recommendation"]:checked');
    const recommendationValue = recommendation ? recommendation.value : 'Not selected';
    const checkboxes = document.querySelectorAll("input[name='languages']:checked");
    const checkboxValues = [];
    checkboxes.forEach(checkbox => {
        checkboxValues.push(checkbox.value);
    });
    const comments = document.getElementById('user-comments').value;


    alert('SUCCESS' + 
        '\nName: ' + name + 
        '\nEmail: ' + email +   
        '\nAge: ' + age +
        '\nDropdown value: ' + dropdown +
        '\nRecommendation: ' + recommendationValue +
        '\nLanguages: ' + checkboxValues.join(', ') +
        '\nComments: ' + comments
    );
});



/* 

Script used without displaying user input information

const form = document.getElementById('user-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    alert('SUCCESS');
});

*/