// Show and hide sidebar

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = "250px";
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = "0px";
}

// Give navbar background color when scroll

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if(window.scrollY > 500){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Scroll to the top when click navbar logo

function scrollToTop(){
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}