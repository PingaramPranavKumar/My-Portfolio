var typed = new Typed('.text', {
  strings: ["Frontend Developer", "Backend Developer", "UI/UX Designer"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,

});
// Initialize Typed.js with options

function sendMail() {
  let parms = {
  
    name : document.getElementById("name").value,
    email : document.getElementById("email").value,
    subject : document.getElementById("subject").value,
    message : document.getElementById("message").value
  }
  emailjs.send("service_7u6fnx7","template_b0azp2h",parms).then(alert("Email Sent!!"))
}