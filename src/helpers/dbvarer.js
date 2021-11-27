
var fs = require("fs");


const ABSOLUTE_PATH = __dirname + "/../../data";
const VARER_FILE = "/varer.json"


class VB {
    constructor() {
      this.salg = this.openFile(VARER_FILE);
    }
    /* CORE */
    // Save file
    saveFile(fileName, contentString) {
      fs.writeFileSync(ABSOLUTE_PATH + fileName, contentString);
    }
  
    // Open file
    //ændrer filename til userfile
    openFile(fileName) {
      const file = fs.readFileSync(ABSOLUTE_PATH + fileName);
      return JSON.parse(file);
    }
  
    /* LOGIN DB */
    saveGoods(varer) {
      this.salg.push(varer);
      this.saveFile(VARER_FILE, JSON.stringify(this.salg));
    }
    deleteGoods(varer) {
        this.salg = this.salg.filter((x) => x.varer != user.varer);
        this.saveFile(USER_FILE, JSON.stringify(this.varer));
      }
    
      findUser(user) {
        return this.users.find((x) => user.email == x.email);
      }
}
  // Det her er en singleton -- laaangt over pensum, men et ret fedt term at fyre af
  module.exports = new VB();