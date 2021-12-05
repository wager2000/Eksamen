document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (user) {
    location.href = "/varer.html";
  }

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
      email: email,
      password: password,
    };

    fetch("http://localhost:8200/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          // Gemme oplysninger
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
