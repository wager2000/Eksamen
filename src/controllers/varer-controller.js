const varerModel = require("./../models/varer");
const express = require("express");
const router = express.Router();
const vb = require("./../helpers/dbvarer");
var fs = require("fs");



router.post("/createvarer", (req, res) => {
    const Goods = new varerModel(req.body.varer, req.body.pris);
    fs.writeFile('data/varer.json',JSON.stringify(Goods), err =>{
        vb.saveGoods(Goods)
        res.status(200).send(true);
        if(err) {res.send(err)
        res.status(404).send(false);
        // stop further execution in this callback
        return;
        }
      })
  

  });

  router.delete("/delete", (req, res) => {
    const Goods= new varerModel(req.body.varer, req.body.pris);
    vb.deleteUser(varer);
    res.status(200).send(true);
  });

  module.exports = router;
