// app.js or app.ts
const express = require("express");
const app = express();
const msg = "We are checking our CI Pipeline is working or not!"

app.get("/", (req, res) => {
    res.send(msg);
});

const server = app.listen(3000, () => {
    console.log("Server is running on port 3000");
});

module.exports = { app, server, msg };
