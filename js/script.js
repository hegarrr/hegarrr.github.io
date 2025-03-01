// Toggle class active
const navbar = document.querySelector('.navbar')
// If humberger menu clicked
document.querySelector('#hamburger-menu').onclick = () => {
    navbar.classList.toggle('active');
};

//Click In Outer SideBar If Display None
const hamburger = document.querySelector('#hamburger-menu');

document.addEventListener('click', function(e) {
    if(!hamburger.contains(e.target) && !navbar.contains(e.target)) {
        navbar.classList.remove('active');
    }
});