const container = document.getElementById('container');
const registerBtn = document.getElementById('register');
const loginBtn = document.getElementById('login');

registerBtn.addEventListener('click', () => {
    container.classList.add("active");
});

loginBtn.addEventListener('click', () => {
    container.classList.remove("active");
});


let userName = document.getElementById("userName");
let userEmail = document.getElementById("userEmail");
let userPassword = document.getElementById("userPassword");
let singInEmail = document.getElementById("singInEmail");
let singInPassword = document.getElementById("singInPassword");
let exist = document.getElementById("exist");
let succes = document.getElementById("succes");
let home = document.getElementById("home");
let welcome = document.getElementById("welcome");
let singUPBtn = document.getElementById("singUP");
let SignINBtn = document.getElementById("SignIN");

let singUPArray = [];

function isEmpty(){
    if(userName.value == "" || userEmail.value == "" || userPassword.value == ""){
        return true
    }else {
        return false
    }
}
if(localStorage.getItem("Users") != null){
            singUPArray = JSON.parse(localStorage.getItem("Users"))
    }else{
        singUPArray = [];
    }
function singUP(){
    
    if(isEmpty() == true){
        exist.innerHTML = '<span class="exist">All inputs is required</span>'
        return true
    }else {
        let user = {
                name : userName.value ,
                email : userEmail.value ,
                password : userPassword.value
            }
            singUPArray.push(user);
            localStorage.setItem("Users" , JSON.stringify(singUPArray));
            exist.innerHTML = '<span class="succes">Success</span>'
            clearInputs();
    }
    
}

function clearInputs(){
    singInEmail.value = ""
    singInPassword.value = ""
    userEmail.value = ""
    userName.value = ""
    userPassword.value = ""
    succes.innerHTML = ""
}


function logIn(){
    if(singInEmail.value == "" || singInPassword.value == ""){
        succes.innerHTML = '<span class="exist">All inputs is required</span>'
    }else{
        let email = singInEmail.value;
        let password = singInPassword.value;
        for(i=0 ; i < singUPArray.length ; i++){
            if(singUPArray[i].email.toLowerCase() == email.toLowerCase() && singUPArray[i].password.toLowerCase() == password.toLowerCase()){
                container.style.display="none"
                home.style.display="block"
                welcome.innerHTML = "Welcome " + singUPArray[i].name
                clearInputs();
                exist.innerHTML = ""
            }else {
                succes.innerHTML = '<span class="exist">incorrect email or password</span>'
            }
        }
    }
}

function logOut(){
    container.style.display="block"
    home.style.display="none"
    welcome.innerHTML = ""
}
singUPBtn.addEventListener("click" , function(){
    singUP()
})
SignINBtn.addEventListener("click" , function(){
    logIn()
})