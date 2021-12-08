document.addEventListener("DOMContentLoaded", (event) => {
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
    // Fetcher dataen
    fetch("http://localhost:8200/users/create", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      // laver User ombjektet omtil en JSON string
      body: JSON.stringify(user),
    })
    //retunerer et promise, og hvis der repsonse 
    //skal det ryge i json og gå til login.html, ellers alert at der er en fejl
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          location.href = "/login.html";
        }
      })
      .catch(() => {
        alert("Der skete en fejl");
      });
  });
});