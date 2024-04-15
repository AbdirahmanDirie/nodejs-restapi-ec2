const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');

const usersRoute = require('./route');


// Configuration
const app = express();
dotenv.config();
app.use(express.json());


app.use("/api", usersRoute);




// Mongoose setup
const PORT = process.env.PORT   || 6000
mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
    }).then(() => {
        app.listen(PORT, () => console.log(`Server Port: ${PORT}`)); 
    })
   .catch(err => {
        console.log("Error connecting to MongoDB", err)
    })