// Jeg laver en function som tager userinputtet fra det de skriver. Det gør jeg både for nyt userID og nyt password


document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();

    const varer = document.getElementById("varer").value;
    const pris = document.getElementById("pris").value;
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

  const varer = JSON.parse(localStorage.getItem("varer"));

  fetch("http://localhost:8200/users/delete", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(varer),
  })
    .then((response) => response.json())
    .then((response) => {
      if (response) {
        localStorage.removeItem("varer");
        location.href = "/varer.html";
      }
    })
    .catch(() => {
      window.alert("Der skete en fejl");
    });
});

function readTextFile(file, callback) {
  var rawFile = new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET", file, true);
  rawFile.onreadystatechange = function() {
      if (rawFile.readyState === 4 && rawFile.status == "200") {
          callback(rawFile.responseText);
      }
  }
  rawFile.send(null);
}

//usage:
readTextFile("/Users/Documents/workspace/test.json", function(text){
  var data = JSON.parse(text);
  console.log(data);
})

console.log("hej")


document.getElementById("visData").addEventListener("submit", async (event) => {
  event.preventDefault();
 fetch("http://localhost:8200/varer/getproducts");

 var k = '<tbody>'
 for (var i = 0; i < myArr.length; i++) {
   k += '<tr>';
   k += '<td>' + myArr[i].varer + '</td>';
   k += '<td>' + myArr[i].pris + '</td>';
   k += '<td>' + myArr[i].billede + '</td>';
   k += '</tr>';
 }
 k += '</tbody>';
 document.getElementById('mytable').innerHTML = k;

});