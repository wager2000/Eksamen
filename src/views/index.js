document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    location.href = "/login.html";
  }
  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();
// bruger Json.parse til at lave det tien Js array
    const user = JSON.parse(localStorage.getItem("user"));
//fetcher det ved hjælp af en delete method
    fetch("http://localhost:8200/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },// Laver det til Json
      body: JSON.stringify(user),
    })//skal fjerne user fra localstorage og fører den til
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("user");
          location.href = "/login.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});
document.addEventListener("DOMContentLoaded", (event) => {
  
  document.getElementById("logout").addEventListener("submit", (event) => {
    event.preventDefault();
// bruger Json.parse til at lave det tien Js array
//fetcher det ved hjælp af en delete method
    fetch("http://localhost:8200/users/logout", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },// Laver det til Json
    })//skal fjerne user fra localstorage og fører den til
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          console.log("jh")
          localStorage.removeItem("user");
          location.href = "/login.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});