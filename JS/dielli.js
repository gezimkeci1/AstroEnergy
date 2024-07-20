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
    const menuButton = document.querySelector('.menuButton');
    if(window.scrollY > 30){
        nav.classList.add('scrolled');
        menuButton.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
        menuButton.classList.remove('scrolled');
    }
});

document.addEventListener('scroll', () => {
   
});

// Open the home page when click navbar logo

document.getElementById('topLogo').addEventListener('click', function(){
    window.location.href = 'home.html';
});