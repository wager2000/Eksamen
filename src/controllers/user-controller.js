
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
  const newuser = new userModel(req.body.newemail, req.body.newpassword);

  db.deleteUser(user); 
  db.deleteUser(newuser);  
 
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



//der bliver sendt et put request ved endpointet /update. 
//definerer user og newuser som er den nye account
router.put("/update", (req, res) => {
  const user = new userModel(req.body.email, req.body.password);
  const newuser = new userModel(req.body.newemail, req.body.newpassword);
//slette den gamle user og gemmer den nye
  db.deleteUser(user);  
  db.saveUser(newuser);
  res.status(200).send(true);
  
});
//laver et delete request med endpointet /logout
router.delete('/logout', (req, res) => {
  res.status(200).send(true);

});
//exporter modulet så det kan blive brugt i de andre programmer ved hjælp af import
module.exports = router;
