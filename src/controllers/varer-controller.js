
//henter vores model for varer, samt express, helpers, fs og til sidst laver vi en konstant med produkterne fra vores varer.json fil
const varerModel = require("../models/varer");
const express = require("express");
const router = express.Router();
const vb = require("../helpers/dbvarer");
var fs = require("fs");
const products = require("../../data/varer.json");




//laver et post request som vi kan lave en varer.
//vi henter modellen ned og den skal så gemmes i varer.json ved hjælp af savegoods
router.post("/createvarer", (req, res) => {
    const Goods = new varerModel(req.body.varer, req.body.vareKategori, req.body.billede);
        vb.saveGoods(Goods)
        res.status(200).send(true);
      
      })

  
//bruger et delete request. Her bruger vi bare deletegoods til at slette vareren
   router.delete("/delete", (req, res) => {
    const varer = new varerModel(req.body.varer, req.body.pris, req.body.vareKategori, req.body.billede);
    vb.deleteGoods(varer);
    res.status(200).send(true);
  });



//vis alle varene på siden
  router.get("/getproducts", (req, res) =>{
    res.status(200).json(products)
   })

//vis varer for en kategori.  
router.get("/getproductsforenkategori/:vareKategori", (req, res)=>{
let category = req.params.varer;
if(products[category]){
  res.status(200).json({[category]:products[category]});
}
else{
  res.sendStatus(404)
}
});
// opdaterer varene ved hjælp af et put request 
//gør ligesom med user, definerer modellen for den gamle vare samt den nye vare
router.put("/update", (req, res) => {
  const varer = new varerModel(req.body.varer, req.body.pris, req.body.vareKategori, req.body.billede);
  const newvarer = new varerModel(req.body.newvarer, req.body.newpris, req.body.newvareKategori, req.body.newbillede);
//sletter først den gamle vare, og gemmer den nye vare.
  db.deleteGoods(varer);  
  db.saveGoods(newvarer);
  res.status(200).send(true);
  
});
//exporter modulet så det kan blive brugt i de andre programmer ved hjælp af import

module.exports = router;
