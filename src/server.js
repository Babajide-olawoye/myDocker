const express = require('express')
const app = express();

app.get("/", (req, res) =>{
    res.send("Testing Docker for first timee")
})

app.listen(3000, () => {
    console.log("app is on port 3000")
})