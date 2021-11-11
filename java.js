
var people =[
    {
        username : "mikkel",
        password : "password123"
    }
]


function login(){

    var username = document.getElementById("username").value
    var password = document.getElementById("password").value

    for (i = 0; i<people.length;i++){
        if (username == people[i].username && password == people[i].password){
        
            alert('Welcome back '+ username + ' You are now logged in!')
            return
        } else {
            alert("Wrong username or password")

        }
    }
    
console.log("incorrect username")
    }
// Jeg laver en function som tager userinputtet fra det de skriver. Det gør jeg både for nyt userID og nyt password
function registerUser(){
var registerUser = document.getElementById("newUser").value

var registerPassword = document.getElementById("newPassword").value
var newUser = {
    username : registerUser,
    password : registerPassword,
}

for (i = 0; i < people.length; i++){
if (registerUser == people[i].username){
    alert("That Username is used, please choose another username")
    return
} 
else if (registerPassword.length < 8) {
    alert("that password is too short, it needs to contain at least 8 characters")
    return

}
else {
    alert("User has been created")
}

}
people.push(newUser)
console.log(newUser)
}





