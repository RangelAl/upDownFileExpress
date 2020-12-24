const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const multer = require("multer");

app = express();
app.use(express.static(path.join(__dirname, 'public')))
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req,res)=>{
    res.sendFile(__dirname + "/index.html");
})

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/");
    },
    filename: function(req,file,cb){
        cb(null, Date.now() + file.originalname);
    }
})

const fileUpload = multer({storage});

app.post("/upload", fileUpload.single("image"),(req,res)=>{
    res.send("recebido");
})

const PORT = 3000;
app.listen(PORT, ()=>{
    console.log("Server running");
})