document.getElementById('reservationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission

    // Basic form validation (you can add more sophisticated validation)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const guests = document.getElementById('guests').value;

    if (!name || !email || !date || !time || !guests) {
        alert('Please fill in all required fields.');
        return;
    }

    // Simulate a successful submission
    const messageDiv = document.getElementById('reservationMessage');
    messageDiv.textContent = 'Reservation request submitted successfully! We will contact you to confirm.';
    messageDiv.classList.add('success-message'); // Add a class for styling (defined in CSS)

    // Clear the form (optional)
    document.getElementById('reservationForm').reset();

});