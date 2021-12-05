
//Jeg starter en server som skal lytte på på PORT 8200
const express = require("express");
const app = express();
const PORT = process.env.PORT || 8200;

const userController = require("./src/controllers/user-controller");
const varerController = require("./src/controllers/varer-controller");

app.use(express.static("./src/views")) 
app.use('/',express.static('public'))


//Gør så den kommer som en string, ved hjælp af at sende den som et json objekt
app.use(express.json());

app.use("/users", userController);
app.use("/varer", varerController);


app.listen(PORT, console.log(`Server is running on port ${PORT}`))