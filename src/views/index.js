document.addEventListener("DOMContentLoaded", (event) => {
  const user = localStorage.getItem("user");
  if (!user) {
    location.href = "/login.html";
  }
 

  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const user = JSON.parse(localStorage.getItem("user"));

    fetch("http://localhost:8200/users/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
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

  const user = JSON.parse(localStorage.getItem("user"));

fetch("http://localhost:8200/users/logout", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(user),
})
  .then((response) => response.json())
  .then((response) => {
    console.log(response)
    location.href = "/login.html";
    }
  )

  .catch(() => {
    window.alert("Der skete en fejl");
  });
});
});