const form = document.getElementById('user-form');
const table = document.getElementById('data-table');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('user-name').value;
    const email = document.getElementById('user-email').value;
    const age = document.getElementById('user-age').value;
    const dropdown = document.getElementById('user-dropdown').value;
    const checkboxes = document.querySelectorAll("input[name='languages']:checked"); 
    const checkboxValues = [];
    checkboxes.forEach(checkbox => {
        checkboxValues.push(checkbox.value);
    });
    const languagesText = checkboxValues.length > 0 ? checkboxValues.join(', ') : 'No checkbox selected';
    const comments = document.getElementById('user-comments').value;
    

    const newRow = table.insertRow();
    newRow.insertCell().textContent = name;
    newRow.insertCell().textContent = email;
    newRow.insertCell().textContent = age;
    newRow.insertCell().textContent = dropdown;
    newRow.insertCell().textContent = languagesText; 
    newRow.insertCell().textContent = comments.trim() !== '' ? comments : 'No comments or suggestions';

    alert('SUCCESS');

    form.reset();
});
