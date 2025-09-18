const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// nav link active


const links = document.querySelectorAll('#nav-links a');

function setActiveLink() {
    const pathSegments = window.location.href.split('/');
    const lastSegment = pathSegments[pathSegments.length - 1] || '#home';

    links.forEach(link => {

        const linkHash = link.getAttribute('href');


        if (lastSegment.includes(linkHash.replace('#', ''))) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


setActiveLink();


window.addEventListener('hashchange', setActiveLink);



// تأكد من وضع هذا بعد تحميل EmailJS library
(function () {
    emailjs.init("aUrzKxPEyVBzDT3lw"); // Public Key
})();

const form = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

form.addEventListener('submit', function (e) {
    e.preventDefault(); // منع الـ default submission

    // رسالة "جارٍ الإرسال..."
    formMessage.textContent = "Sending message...";
    formMessage.style.color = "#555";

    emailjs.sendForm('service_bejx81t', 'template_8xzry6m', this)
        .then(() => {
            formMessage.textContent = "Message sent successfully!";
            formMessage.style.color = "green";
            form.reset();
        }, (error) => {
            formMessage.textContent = "Failed to send message. Try again.";
            formMessage.style.color = "red";
            console.error(error);
        });
});
