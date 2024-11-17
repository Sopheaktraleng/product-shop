// const express = require('express')
import express from "express"
const app = express();
app.get("/",(req,res)=>{
    res.send('Server is running')
})
app.listen(5001, ()=>{
    console.log("Server is running on http://localhost:5001")
})