// Show and hide sidebar

function showSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = "250px";
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.width = "0px";
}

// Add background color to navbar when scroll

document.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    if(window.scrollY > 80){
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

//Open main page when click navbar logo

document.getElementById('topLogo').addEventListener('click', function(){
    window.location.href('home.html');
})

// Form validation

function validateForm(event){

    const name = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const number = document.getElementById("number").value;
    const address = document.getElementById("address").value;
    const subject = document.getElementById("subject").value;

    const nameError = document.getElementById("nameError");
    const lastNameError = document.getElementById("lastNameError");
    const emailError = document.getElementById("emailError");
    const numberError = document.getElementById("numberError");
    const addressError = document.getElementById("addressError");
    const messageError = document.getElementById("messageError");

    nameError.textContent = "";
    lastNameError.textContent = "";
    emailError.textContent = "";
    numberError.textContent = "";
    addressError.textContent = "";
    messageError.textContent = "";

    let isValid = true;

    // Name is empty
    if(name === ""){
        nameError.textContent = "Vendosni emrin tuaj!";
        isValid = false;
        event.preventDefault();
    }
    // Last Name is empty
    if(lastName === ""){
        lastNameError.textContent = "Vendosni mbiemrin tuaj!";
        isValid = false;
        event.preventDefault();
    }
    // Email is empty
    if(email === ""){
        emailError.textContent = "Vendosni email-in tuaj!";
        isValid = false;
        event.preventDefault();
    }
    // Number is empty
    if(number === ""){
        numberError.textContent = "Vendosni numrin tuaj te telefonit!";
        isValid = false;
        event.preventDefault();
    }
    // Address is empty
    if(address === ""){
        addressError.textContent = "Vendosni adresen tuaj!";
        isValid = false;
        event.preventDefault();
    }
    // Message is empty
    if(subject === ""){
        messageError.textContent = "Vendosni mesazhin tuaj!";
        isValid = false;
        event.preventDefault();
    }

    return isValid;
}