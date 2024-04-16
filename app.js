var firstname = document.getElementById("firstname")
var lastname = document.getElementById("lastname")
var email = document.getElementById("email")
var password = document.getElementById("password")
var date = document.getElementById("date")

function signup(){
    var user ={
        name : firstname.value,
        lastname : lastname.value,
        email:email.value,
        password:password.value,
        date:date.value,

    }
    localStorage.setItem("name", JSON.stringify(user))
}

function loginbtn(){
var loginEmail = document.getElementById('login-email').value
var loginPass = document.getElementById('login-pass').value

var userData =JSON.parse(localStorage.getItem("name"));
if (loginEmail === userData.email){
    if(loginPass ===userData.password){
        location.href = '../main.html'

    }else{
        alert("pass not correct")
    }

}else{
    alert("please enter correct email")
}

}