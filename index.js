//bruger express modulet
const express = require("express");
//laver et objekt af express modulet
const app = express();
//Jeg starter en server som skal lytte på på PORT 8200

const PORT = process.env.PORT || 8200;
//require de to controllers vi har 
const userController = require("./src/controllers/user-controller");
const varerController = require("./src/controllers/varer-controller");

app.use(express.static("./src/views")) 
app.use('/',express.static('public'))


//Gør så den kommer som en string, ved hjælp af at sende den som et json objekt
app.use(express.json());
//bruger exprees til de to controllers, og de har to forskellige stier
app.use("/users", userController);
app.use("/varer", varerController);

//tjekker at porten fungerer
app.listen(PORT, console.log(`Server is running on port ${PORT}`))