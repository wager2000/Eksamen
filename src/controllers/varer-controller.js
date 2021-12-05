const varerModel = require("../models/varer");
const express = require("express");
const router = express.Router();
const vb = require("../helpers/dbvarer");
var fs = require("fs");
const products = require("../../data/varer.json");

module.exports = router;




router.post("/createvarer", (req, res) => {
    const Goods = new varerModel(req.body.varer, req.body.pris, req.body.billede);
        vb.saveGoods(Goods)
        res.status(200).send(true);
      
      })

  

   router.post("/delete", (req, res) => {
    const varer = new varerModel(req.body.varer, req.body.pris, req.body.billede);
    vb.deleteGoods(varer);
    res.status(200).send(true);
  });



//vis alle varene på siden
  router.get("/getproducts", (req, res) =>{
    res.status(200).json(products)
    console.log(products)
   })

//vis varer for en kategori
router.get("/getproductsforenkategori/:varer", (req, res)=>{
let category = req.params.varer;

if(products[category]){
  
  res.status(200).json({[category]:products[category]});
}
else{
  res.sendStatus(404)
}
});

router.put("/opdater_products/:varer", (req, res)=>{
  let category = req.params.varer;
  if(products[category]){
    products[category] = req.body.pris;
    res.status(200).json({[category]:products[category]});
  }
  else{
    res.send(404)
  }
  });

