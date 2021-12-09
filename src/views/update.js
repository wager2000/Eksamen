
document.addEventListener("DOMContentLoaded", (event) => {
   
document.getElementById("update").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
//vi definerer de inputs som den nye user sætter ind som newemail og newpassword
// det gør vi så den ikke bliver gemt som den normale user som vi slette i db.varer
    let user = JSON.parse(localStorage.getItem("user"));
     user.newemail = email
     user.newpassword = password
    fetch("http://localhost:8200/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })//kommer et promise, hvis der svar skal det laves til json
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          // Gemme oplysninger i localstorage og gå tl varer.html
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(user));
          location.href = "/varer.html";
        } else {//ellers skriv oplysninger forkert
          window.alert("Oplysninger forkert");
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});