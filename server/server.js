


let express= require("express");
let bodyParser =  require('body-parser');
// require("./db/config");
// let Users= require("./db/users")
// let Resturant=require("./db/resturant")
// const nodemailer=require("nodemailer");




let app = express();



app.use(bodyParser.json());
app.use(bodyParser.urlencoded());





app.get("/",(req,res)=>{
   
    res.send("This work")
})

app.post("/checkout",(req,res)=>{
   console.log("request a gai");
    res.send("This work")
})




app.use(express.static('./build'));
app.listen(8080, function () {
    console.log("Start starting");
})
