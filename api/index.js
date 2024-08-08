const express = require("express");
const cors = require("cors");
const {connectToMongodb} = require("./connect.js") 
const User = require("./models/user.js");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const PORT = 4000;

connectToMongodb('mongodb://localhost:27017/blogs')
.then(() => console.log("mongodb connected"));

const salt = bcrypt.genSaltSync(10);
const secret = "sofjdnep9u8iweatfi9hwea";

app.use(cors({credentials:true,origin:'http://localhost:5173'}));
app.use(express.json());
app.use(cookieParser())

app.post('/register', async (req,res)=>{
    const {username, password} = req.body;
    try{
        const userDoc = await User.create({
            username,
            password:bcrypt.hashSync(password,salt),
        });
        res.json(userDoc);
    }
    catch(e){
        res.status(400).json(e);
    }
});

app.post('/login',async(req,res)=>{
    const{username,password} = req.body;
    const userDoc = await User.findOne({username});
    console.log({username:password});
    const passOk = bcrypt.compareSync(password, userDoc.password);
    if(passOk){
        //logged in
        jwt.sign({username,id:userDoc._id},secret, {},(err,token)=>{
            if(err) throw err;
            res.cookie('token', token).json({
                id:userDoc._id,
                username
            });
        })
    }
    else{
        res.status(400).json("wrong credentials");
    }
});

app.get('/profile',async (req,res)=>{
    const {token} = req.cookies;
    jwt.verify(token, secret, {}, (err,info)=>{
        if(err) throw err;
        res.json(info);
    });
});

app.post('/logout', async (req,res)=>{
    res.cookie('token','').json('ok');
})

app.listen(PORT,()=>{
    console.log("server running at http://localhost:4000");
})

//sP1FUhhCVxTxKtjC