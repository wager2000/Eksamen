
//vore class som er vores bruger
class User {
  constructor(email, password,) {
    this.email = email;
    this.password = password;
  }
}
//gør så vi kan bruger den i andre filer
module.exports = User;