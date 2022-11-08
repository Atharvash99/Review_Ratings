const express=require('express');
const app=express();
const bcrypt = require("bcryptjs");
const router = require('./routes/userRoutes')



require('./model/config')
var bodyParser=require('body-parser');
const userSchema = require('./model/userSchema');
const User=require('./model/userSchema');

app.use(express.json())
app.use(bodyParser.json())

app.get('/',function(req,res){
     res.send("Welcome to node js world... !");
 })

/*
 app.post('/registerUser',async(req,res) => {
    let email=req.body.email;
   
    //const cruddata=new crudeSchema(req,res);
    const userData=new userSchema({
        name:req.body.name,
        email: req.body.email,
        password: req.body.password,
        number:req.body.number,
        city:req.body.city,
        state:req.body.state,
        isActive:req.body.isActive,
        role:req.body.role
    })
    console.log(req.body.name);





    try{
        const{email,password}=req.body;
        const new_user = new userSchema(req.body);

        //sbse pehle check kr rhe h ki user already register h ki ni..email se.  Agr register h to yhi se return kr jao nhi to add krwa do
        const userExists= await User.findOne({email:email});
        if(userExists){
            return res.status(400).json({status:400,error:"Email already exists.."});
        }
        const salt= await bcrypt.genSalt(10);
        new_user.password=await bcrypt.hash(password,salt);
        let addUser = await new_user.save();

        
        console.log("inside try");
    
        console.log("after try");
        res.json(addUser);
    }catch(err){
        res.send("Error"+err)
    }



})*/

app.use('/', router);
app.listen(9000,function(req,res){
    console.log("server is running on port : 9000");
});