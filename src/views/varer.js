// Jeg laver en function som tager userinputtet fra det de skriver. Det gør jeg både for nyt userID og nyt password


document.addEventListener("DOMContentLoaded", (event) => {
  document.getElementById("form").addEventListener("submit", (event) => {
    event.preventDefault();
//laver en konstant for hver af de inputs useren sætter ind
    const varer = document.getElementById("varer").value;
    const pris = document.getElementById("pris").value;
    const vareKategori = document.getElementById("vareKategori").value;
    const billede = document.getElementById("billede").value
   //laver en konstant som indeholder alle de fire  values
    const opretVare = {
      varer: varer,
      pris: pris,
      vareKategori: vareKategori,
      billede: billede
    };
//fetcher dataen med med det endpointet for når en bruger opretter vareren
    fetch("http://localhost:8200/varer/createvarer", {
        method: "POST",
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },//laver vareren til en string
        body: JSON.stringify(opretVare),
      })
      //converter det til Json
      .then((response) => response.json())
      .then((response) => {
        if (response) {//skal hoppe til varer siden
          location.href = "/varer.html";
        }
      })//catch hvis der kommmer en fejl
      .catch(() => {
        window.alert("Der skete en fejl");
      });
  });
});


async function getGoods() {
  const response = await fetch("http://localhost:8200/varer/getproducts")
  const result = await response.json()
  return result
}

async function deleteGoods(id) {
  const response = await fetch("http://localhost:8200/varer/delete" + varer, { 
    method: 'DELETE'
  })
  const result = await response.json()
  return result
}

function visTabel(goods) {
    const table = document.getElementById('varerTable');
    let tableHtml = `
      <tr>
      <th>
      <label Varekategori:</label>
      <select name="kategori" id="varer">
          <option value="mad">Mad</option>
          <option value="drikkelse">Drikkelse</option>
          
      </select>
      </th>
      
      <th>Vare</th>     
       <th>Pris</th>
        <th>Billede</th>
      </tr>`;
    for (const row of goods){
      tableHtml += `
        <tr>
          <td>${row.vareKategori}</td>
          <td>${row.varer}</td>
          <td>${row.pris}</td>
          <td><img src="${row.billede}" style="height:100px;width000px;"</td>
          <td><input type="button" value="Delete" onclick="handleDelete()"></td>
          <td><button onclick ="updateVare"> update </button></td>
        </tr>
      `;
    }
    table.innerHTML = tableHtml;
}

async function handleDelete(varer) {
  try {
    await deleteGoods(varer)
    const goods = await getGoods()
    visTabel(goods)
  } catch(err) {
    console.error(err)
  }  
}

async function handleLoad() {
  try {
    const goods = await getGoods()
    visTabel(goods)
  } catch(err) {
    console.error(err)
  }  
} 

document.getElementById("vareknap").addEventListener('click', handleLoad);



document.addEventListener("DOMContentLoaded", (event) => {
   
  document.getElementById("updateVare").addEventListener("submit", (event) => {
      event.preventDefault();
  
      const varer = document.getElementById("varer").value;
    const pris = document.getElementById("pris").value;
    const vareKategori = document.getElementById("vareKategori").value;
    const billede = document.getElementById("billede").value

      const opretVare = {
        newvarer: varer,
        newpris: pris,
        newvareKategori: vareKategori,
        newbillede: billede
      };
      fetch("http://localhost:8200/varer/update", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(opretVare),
      })
        .then((response) => response.json(opretVare))
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

  