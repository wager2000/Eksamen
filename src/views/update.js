
document.addEventListener("DOMContentLoaded", (event) => {
   
document.getElementById("update").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    let user = JSON.parse(localStorage.getItem("user"));
user.newemail = email
user.newpassword = password
    fetch("http://localhost:8200/users/update", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          // Gemme oplysninger i localstorage
          localStorage.removeItem("user");
          localStorage.setItem("user", JSON.stringify(user));
          location.href = "/varer.html";
        } else {
          window.alert("Oplysninger forkert");
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});