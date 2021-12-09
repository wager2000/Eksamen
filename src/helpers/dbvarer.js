// bruger fs til at læse filer

var fs = require("fs");

//definerer stierne til dataen og til varer.json

const ABSOLUTE_PATH = __dirname + "/../../data";
const VARER_FILE = "/varer.json"

//laver et class, med en constructer som skal åbne user filen når den kaldes
class VB {
    constructor() {
      this.salg = this.openFile(VARER_FILE);
    }
      // skalg gemme filen. her bruger vi fs til at lave en ny fil
    saveFile(fileName, contentString) {
      fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
    }
  
     // åbner filen
  //ændrer filename til varerfile. herbruger vi fs til at læse filen
  //Parser filen til sidst
    openFile(fileName) {
      const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
      return JSON.parse(file);
    }
  

  //gemmer brugeren. åbner filen med this.salg hvorefter vi bruger push til at lægge den nye vare ind i
  // Og til sidst gemmer vi filen igen med savefile som vi lavede i starten    
  saveGoods(varer) {
      this.salg.push(varer);
      this.saveFile(VARER_FILE, JSON.stringify(this.salg));
    }
    // skal slette vareren. åbner filen og bruger filter til at finde vareren og derefter slette den
//til sidst skal den gemme filen
    deleteGoods(varer) {
        this.salg = this.salg.filter((x) => x.varer != varer.varer);
        this.saveFile(VARER_FILE, JSON.stringify(this.salg));
      }
    
     
}
//laver et singleton, for at sikrer den retunere den samme instans, så man ikke fx opretter to varer når det kun skal være en
module.exports = new VB();