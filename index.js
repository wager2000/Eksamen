const express = require("express");
const app = express();

const userController = require("./src/user-controllers");

const PORT = process.env.PORT || 3000;

app.use(express.static("./src/views"))

//Gør så den kommer som en string, ved hjælp af at sende den som et json objekt
app.use(express.json());

app.use("/user", userController);

app.listen(PORT, console.log("server is running"))

const morgan = require("morgan");

app.use(morgan("combined"));