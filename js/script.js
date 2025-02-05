 // Function to handle form submission and scroll to the phone number
function handleSubmit(event) {
    event.preventDefault(); // Prevent the form from submitting

    
    document.getElementById("phone-section").scrollIntoView({ behavior: 'smooth' });
}
