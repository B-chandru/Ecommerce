// app.js or app.ts
const express = require("express");
const app = express();

app.get("/", (req, res) => {
    res.send("We are under Development Mode!.............");
});

const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = { app, server };
