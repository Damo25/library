// Code  for mongoose config in backend
// Filename - backend/index.js

// To connect with your mongoDB database
const mongoose = require('mongoose');

mongoose
    .connect('mongodb://127.0.0.1:27017/Library')
    .catch (error => console.log(error));


// For backend and express
const express = require('express');
const app = express();
const cors = require("cors");
console.log("App listen at port 5000");
app.use(express.json());
app.use(cors());
app.get("/", (req, resp) => {

    resp.send("App is Working");
    // You can check backend is working or not by 
    // entering http://loacalhost:5000
    
    // If you see App is working means
    // backend working properly
});

app.listen(5000);