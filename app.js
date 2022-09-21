const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req, res) => {
    console.log('requiest is ', req);
    req.status(200).send();
})

app.get("/users", (res, req) => {});
app.get("/users/1", (res, req) => {});
app.post("/users", (res, req) => {});
app.patch("/users/1", (res, req) => {});
app.delete("/users/1", (res, req) => {});

module.exports = app;