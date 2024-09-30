// Function to handle sending the message via WhatsApp
function sendWhatsApp() {
    const name = document.getElementById('name').value;
    const message = document.getElementById('message').value;

    if (name && message) {
        const whatsappMessage = `Name: ${name}%0A%0AMessage: ${message}`;
        const whatsappURL = `https://api.whatsapp.com/send?phone=+250795904330&text=${whatsappMessage}`;
        window.open(whatsappURL, '_blank');
    } else {
        alert("Please fill in all the fields.");
    }
}

// Function to handle sending the message via Email
function sendEmail() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        const emailSubject = `Message from ${name}`;
        const emailBody = `Name: ${name}%0AEmail: ${email}%0A%0AMessage: ${message}`;
        const emailAddress = "techplustrust@gmail.com";
        window.open(`mailto:${emailAddress}?subject=${emailSubject}&body=${emailBody}`, '_self');
    } else {
        alert("Please fill in all the fields.");
    }
}
