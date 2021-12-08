var fs = require("fs");


const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";

class DB {
  constructor() {
    this.bruger= this.openFile(USER_FILE);
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
  saveUser(user) {
    this.bruger.push(user);
    this.saveFile(USER_FILE, JSON.stringify(this.bruger));
  }

  deleteUser(user) {
    this.bruger = this.bruger.filter((x) => x.email != user.email);
    this.saveFile(USER_FILE, JSON.stringify(this.bruger));
  }

  findUser(user) {
    return this.bruger.find((x) => user.email == x.email);
  }

}

// Det her er en singleton -- laaangt over pensum, men et ret fedt term at fyre af
module.exports = new DB();
