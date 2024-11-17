document.getElementById("check-btn").addEventListener("click", checkDomainAvailability);
document.getElementById("register-btn").addEventListener("click", registerDomain);

const apiKey = 'YOUR_GOODADDY_API_KEY';  // Replace with your API key

function checkDomainAvailability() {
    const domain = document.getElementById("domain").value;
    const responseMsg = document.getElementById("response-msg");
    const registerSection = document.getElementById("register-section");

    // Clear previous messages
    responseMsg.innerText = '';

    // Call backend API to check domain availability
    fetch('http://localhost:3001/register-domain', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ domain, apiKey }),
    })
    .then(response => response.json())
    .then(data => {
        responseMsg.innerText = data.message;
        if (data.message.includes("available")) {
            registerSection.style.display = 'block';  // Show registration button
        }
    })
    .catch(error => {
        responseMsg.innerText = "Error checking domain availability.";
    });
}

function registerDomain() {
    const domain = document.getElementById("domain").value;
    const responseMsg = document.getElementById("response-msg");

    // Simulate domain registration process (replace with actual logic)
    responseMsg.innerText = `Domain ${domain} has been successfully registered!`;
}
