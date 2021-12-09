// bruger fs til at læse filer
var fs = require("fs");

//definerer stierne til dataen og til user.json
const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";

//laver et class, med en constructer som skal åbne user filen når den kaldes
class DB {
  constructor() {
    this.bruger= this.openFile(USER_FILE);
  }
 
  // skalg gemme filen. her bruger vi fs til at lave en ny fil
  saveFile(fileName, contentString) {
    fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
  }

  // Open file
  //ændrer filename til userfile. herbruger vi fs til at læse filen
  //Parser filen til sidst
  openFile(fileName) {
    const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
    return JSON.parse(file);
  }

  //gemmer brugeren. åbner filen med this.bruger hvorefter vi bruger push til at lægge den nye bruger ind i
  // Og til sidst gemmer vi filen igen med savefile som vi lavede i starten
  saveUser(user) {
    this.bruger.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.bruger));
  }
// skal slette brugeren. åbner filen og bruger filter til at finde brugeren og derefter slette den
//til sidst skal den gemme filen
  deleteUser(user) {
    this.bruger = this.bruger.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.bruger));
  }
//finder brugeren ved at se om emailen som user bruger passer til den i json filen
  findUser(user) {
    return this.bruger.find((x) => user.email == x.email);
  }

}

//laver et singleton, for at sikrer den retunere den samme instans, så man ikke fx opretter to brugere når det kun skal være en
module.exports = new DB();
