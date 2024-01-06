/* <!-- ////////////////       Navigation      //////////////// --> */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

const navLinks = document.querySelectorAll('nav a');
const underline = document.querySelector('.underline');

navLinks.forEach(link => {
link.addEventListener('mouseenter', function() {
    const linkRect = this.getBoundingClientRect();
    underline.style.width = `${linkRect.width}px`;
    underline.style.transform = `translateX(${linkRect.left}px) scaleY(1)`;
});

link.addEventListener('mouseleave', function() {
        underline.style.width = '0';
        underline.style.transform = 'translateX(0) scaleY(0)';
    });
});

window.addEventListener('scroll', function() {
    const scrollPosition = window.scrollY;

    navLinks.forEach(link => {
        const targetSection = document.querySelector(link.getAttribute('href'));
        const sectionTop = targetSection.offsetTop;
        const sectionHeight = targetSection.offsetHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            const linkRect = link.getBoundingClientRect();
            underline.style.width = `${linkRect.width}px`;
            underline.style.transform = `translateX(${linkRect.left}px) scaleY(1)`;
        }
    });
});


/* <!-- ////////////////       Projects        //////////////// --> */
var proj1 = document.querySelector('#proj1');
var proj2 = document.querySelector('#proj2');
var proj3 = document.querySelector('#proj3');
var proj4 = document.querySelector('#proj4');
var infos = document.querySelector('#infos');

window.addEventListener('scroll', function() {

    if (window.scrollY >= proj1.offsetTop && window.scrollY < proj2.offsetTop) {
        infos.innerHTML = "Porject 1";
    } else if (window.scrollY >= proj2.offsetTop && window.scrollY < proj3.offsetTop) {
        infos.innerHTML = "Porject 2";
    } else if (window.scrollY >= proj3.offsetTop && window.scrollY < proj4.offsetTop) {
        infos.innerHTML = "Porject 3";
    } else if (window.scrollY >= proj4.offsetTop) {
        infos.innerHTML = "Porject 4";
    } else {
        infos.innerHTML = "Projects list";
    }
});


