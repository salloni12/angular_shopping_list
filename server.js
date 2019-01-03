var express=require("express");

var app=express();


var port=3000;

app.use(express.static(__dirname));

app.get("*",(req,res)=>{

    return res.sendfile("index.html");
});

app.listen(port,()=>{
    console.log("server started at port "+port);
});