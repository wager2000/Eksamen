const fs = require("fs")

const ABSOLUTE_PATH = __dirname + "/../../data";
const USER_FILE = "/users.json";

class DB{
    constructor(){
        this.users = this.openfile()
    }

savefile(){
fs.writeFileSync(ABSOLUTE_PATH+ USER_FILE)
}
openfile(){
    const file = fs.readFileSync(ABSOLUTE_PATH + USER_FILE);
    return JSON.parse(file);
}
saveuser(user){
this.users.push(user);
this.savefile()


}

}
module.exports = new DB()