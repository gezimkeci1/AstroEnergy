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
    if(window.scrollY > 20){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Open the home page when click navbar logo

document.getElementById('topLogo').addEventListener('click', function(){
    window.location.href = 'home.html';
});