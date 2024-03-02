const express = require("express")

const app = express()

app.get("/", (req, res) => {
    res.status(200).send("Home Get Page")
})

app.listen(8080, () => {
    console.log(`Server is started at http://localhost:8080`)
})