const express = require("express");

const connection = require("./config/database");

const notesRouters = require("./routes/notes.routes");

const app = express();

app.use(express.json());

app.use("/notes",notesRouters);

require("dotenv").config();


const {LOCALHOST_PORT} = process.env || 8000;


app.get("/",(req,res)=>{
    res.send("<h1>Welcome to Home Page.</h1>");
});



app.listen(LOCALHOST_PORT,async()=>{
    try{
        await connection;
        console.log("Connected");
        console.log(`Server is running on the Localhost port : ${LOCALHOST_PORT}`);
    }catch(err){
        console.log("Something went wrong in connection with database.");
        console.log(err);
    }
});


