
function load() {
    
          var mydata = JSON.parse(varer);
      alert(mydata.length);

      var div = document.getElementById('data');

      for(var i = 0;i < mydata.length; i++)
      {
          div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].varer +"</p>" + "<br>";
          div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].pris+"</p>" + "<br>";
          div.innerHTML = div.innerHTML + "<p class='inner' id="+i+">"+ mydata[i].billede+"</p>" + "<br>";


      }
  }