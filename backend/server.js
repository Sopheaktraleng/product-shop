// const express = require('express')
import express from "express";
import dotenv from "dotenv";
dotenv.config();
const app = express();
console.log(process.env.MONGO_URL);
app.get("/", (req, res) => {
    res.send("Server is running");
});
app.listen(5001, () => {
    console.log("Server is running on http://localhost:5001");
});
app.call();
