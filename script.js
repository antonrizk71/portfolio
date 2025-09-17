const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// nav link active

const links = document.querySelectorAll('#nav-links a');

function setActiveLink() {
    const currentHash = window.location.hash || '#home';
    links.forEach(link => {
        if (link.getAttribute('href') === currentHash) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}


setActiveLink();

window.addEventListener('hashchange', setActiveLink);