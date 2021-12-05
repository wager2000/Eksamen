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

async function getGoods() {
  const result = await fetch("http://localhost:8200/varer/getproducts")
  const goods = await result.json()
  return goods
}

function renderTable(goods) {
    const table = document.getElementById('varerTable');
    let tableHtml = `
      <tr>
        <th>varer</th>
        <th>pris</th>
        <th>billede</th>
      </tr>`;
    for (const row of goods){
      tableHtml += `
        <tr>
          <td>${row.varer}</td>
          <td>${row.pris}</td>
          <td><img src="${row.billede}" style="height:50px;width:50px;"</td>
        </tr>
      `;
    }
    table.innerHTML = tableHtml;
}

async function handleClick() {
  try {
    const goods = await getGoods()
    renderTable(goods)
  } catch(err) {
    console.log('Oh no 😨')
    console.error(err)
  }  
} 

document.getElementById("clickMe").addEventListener('click', handleClick);

/*
document.getElementById("clickMe").addEventListener('click', async() => {
  let table = document.getElementById('varerTable');
  
  let result = await fetch("http://localhost:8200/varer/getproductsforenkategori/:varer", {method: 'GET', headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
})
  .then(res => res.json())
  .catch(console.log("error"));

  let tableHtml = `<tr>
  <th>varer</th>
  <th>pris</th>
  <th>billede</th>
  </tr>
  `;
  for(const varer in result){
    tableHtml += `
    <tr>
    <td>${varer.varer}</td>
    <td>${varer.pris}</td>
    <td><img src="${varer.billede}" style="height:50px;width:50px;"</td>
    </tr>
    `;

  }
  table.innerHTML = tableHtml;
});
*/