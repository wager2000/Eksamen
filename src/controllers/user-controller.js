
//Gør at vores endpoints også bruger express, som vi definerer som router.
//Bruger også require til at hente vores Model for vores user ind
// Henter dataen fra user.json ind og de functioner som jeg har lavet i databasen kan jeg nu også bruge da jeg har requiret dem
const express = require("express");
const router = express.Router();
const userModel = require("./../models/user");
const users = require("../../data/users.json");
const db = require("./../helpers/db");
const fs = require("fs")

/* Nu går jeg igang med routing, det vil altså sige hvordan appen skal reagere når klienten sender et specifikt
endpoint, med en specifik HHTP request
Nedenfor bruger jeg et post request. 
Jeg definerer hvad min user indeholder og den skal så bruge funktionen saveUser som gemmer den i json filen. 
Til sidst skal den så sende statuskoden ok
*/
router.post("/create", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.saveUser(user);
  res.status(200).send(true);
  
});

  //Gør det samme som ovenfor, udover jeg bruger .deletuser, som altså skal slette useren
  //Her bruger jeg HHTP request /delete
router.delete("/delete", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  db.deleteUser(user);  
  res.status(200).send(true);
});
//bruger HHTP request post igen, og min findUser funktion for at se om useren er i users.json filen
//hvis den så er der, skal den tjekke om passwordet passer og enten sende status fejl eller ok

router.post("/login", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const found = db.findUser(user);
  if (found) {
    if (user.password == found.password) {
      res.status(200).send(true);
    } else {
      res.status(401).send(false);
    }
  } else {
    res.status(404).send(false);
  }
});
//HHTP request post,
router.post('/logout', (req, res) => {
  fs.writeFile('data/varer.json',JSON.stringify(users), err =>{
  res.clearCookie('users');
  return location = "/login"
});
});
module.exports = router;
