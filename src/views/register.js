// Jeg laver en function som tager userinputtet fra det de skriver. Det gør jeg både for nyt userID og nyt password
document.addEventListener("DOMcontentloaded",(event)=>{
    document.getElementById("form").addEventListener("submit",(event)=>{
    
     event.preventDefault();
    
     const email = document.getElementById("email").value
     const password = document.getElementById("password").value
     const user = {
         email: email,
         password: password,
     }
     fetch("http://localhost:3000/users/create",{
         method: "POST",
         headers:{
             "Content-type": "application/json",
         },
         body: JSON.stringify(user),


     })
     .then((response) => response.json())
     .then((response) => {
         if (response){
             location.href = "/";
         }
     })
     .catch(()=>{
         window.alert("error")
     });
    });
    });