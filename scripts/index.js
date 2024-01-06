/* <!-- ////////////////       Navigation      //////////////// --> */
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
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


