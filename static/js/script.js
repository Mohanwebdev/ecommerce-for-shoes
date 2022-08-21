// FOR NAVIGATION BAR IN INDEX.HTML
//linking my variables to my id from index.html
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

function productone() {

//    document.getElementById("prodone").setAttribute("class","productdisplay");
   alert("heloo");
}

if (bar) {
    //someone click on burger icon, a event will happen
    bar.addEventListener('click', () => {
        //class list
        nav.classList.add('active');
    })
}

if (close) {
    //someone click on close icon, a event will happen
    close.addEventListener('click', () => {
        //class list
        nav.classList.remove('active');
    })
}



// Account Page

//resetting the form
function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    //when create account is click, login form will be hidden and create account form will be shown
    document.querySelector("#linkCreateAccount").addEventListener("click", function(e) {
        e.preventDefault(); // prevent default behaviour 
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });
    //when link login is click, login form will be shown and create account form will be hidden
    document.querySelector("#linklogin").addEventListener("click", function(e) {
        e.preventDefault(); // prevent default behaviour
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", function(e) {
        e.preventDefault();

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        //when user click out of input field, this do a few checks, if not valid error message
        inputElement.addEventListener("blur", function(e) {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", _e => {
            clearInputError(inputElement);
        });
    });
});


//contact page form

//GET
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://sportsemporium-78d1.restdb.io/rest/contact",
    "method": "GET",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "<your CORS apikey here>",
        "cache-control": "no-cache"
    }
}

$.ajax(settings).done(function(response) {
    console.log(response);
});

//POST
var jsondata = { "field1": "xyz", "field2": "abc" };
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://sportsemporium-78d1.restdb.io/rest/contact",
    "method": "POST",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "<your CORS apikey here>",
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function(response) {
    console.log(response);
});

//PUT
var jsondata = { "field1": "new value", "field2": "xxx" };
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://sportsemporium-78d1.restdb.io/rest/contact/(ObjectID)",
    "method": "PUT",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "<your CORS apikey here>",
        "cache-control": "no-cache"
    },
    "processData": false,
    "data": JSON.stringify(jsondata)
}

$.ajax(settings).done(function(response) {
    console.log(response);
});

//DELETE
var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://sportsemporium-78d1.restdb.io/rest/contact/(ObjectID)",
    "method": "DELETE",
    "headers": {
        "content-type": "application/json",
        "x-apikey": "<your CORS apikey here>",
        "cache-control": "no-cache"
    }
}

$.ajax(settings).done(function(response) {
    console.log(response);
});


//newsletter
var obj = new db.newsletter(properties);

var instance = new db.newsletter({ "Email address": "value", ... });

function newsletter() {
    alert("You have signed up for our monthly newsletter!");
}

function trackmyorder() {
    alert("order is being processed and will be delivered in 3 working days!");
}

function msgsent(){
    alert("Message sent successfully");
}