

const express = require("express")
const app = express();
const importData = require("./Data.json")
let port = process.env.PORT || 3000;

app.get("/", (req, res) => {
    res.send("Hello Worrrld")
})

app.get("/sColour", (req, res) => {
    res.send(importData)
})

app.listen(port, () =>{console.log('example app is listening on port http://localhost: ${port}')})

