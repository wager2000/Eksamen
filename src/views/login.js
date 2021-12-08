
// Hvis useren allerede er logget ind skal de blive ført til varer.html
document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (user) {
    location.href = "/varer.html";
  }

  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
    // laver to konstanter, som tager valuen for det useren sætter ind i Email og password.

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
      //laver mit user object som er forbundet til inputtet ovenover
    const user = {
      email: email,
      password: password,
    };
    // Fetcher dataen med en post request
    fetch("http://localhost:8200/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
            // laver User ombjektet omtil en JSON string

      body: JSON.stringify(user),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          // Den skal gemme useren i localstorage, og fører dem til varer.html
          localStorage.setItem("user", JSON.stringify(user));
          location.href = "/varer.html";
        } else {
          //alert hvis der sker en fejl
          window.alert("Oplysninger forkert");
        }
      })
    });
});

