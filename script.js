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

