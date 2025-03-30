document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    document.getElementById("status").innerText = "Message Sent Successfully!";
    document.getElementById("contact-form").reset();
});