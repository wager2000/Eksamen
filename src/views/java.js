
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

function deleteUser(){
    var deleteUser = document.getElementById("deleteKnap").value


}



