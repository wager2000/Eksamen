
// Jeg laver en function som tager userinputtet fra det de skriver. Det gør jeg både for nyt userID og nyt password
document.addEventListener("DOMContentLoaded", (event) => {
    document.getElementById("form").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const varer = document.getElementById("varer").value;
      const pris= document.getElementById("pris").value;
      const billede = document.getElementById("billede").value
  
      const opretVare = {
        varer: varer,
        pris: pris,
        billede: billede
      };
  
      fetch("http://localhost:8200/varer/createvarer", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'       
         },
        body: JSON.stringify(opretVare),
      })
      //converter det til Json
        .then((response) => response.json())
        .then((response) => {
          if (response) {
            location.href = "/varer.html";
          }
        })
        .catch(() => {
          window.alert("Der skete en fejl");
        });
    });
  });








  document.getElementById("delete").addEventListener("submit", (event) => {
    event.preventDefault();

    const varerne = JSON.parse(localStorage.getItem("Goods"));

    fetch("http://localhost:8200/varer/delete", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(varerne),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          localStorage.removeItem("Goods");
          location.href = "/varer.html";
        }
      })
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });

