document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    var submitButton = document.getElementById('submit-button');
    submitButton.style.backgroundColor = '#45a049';

    document.getElementById('confirmation-message').style.display = 'block';
});
