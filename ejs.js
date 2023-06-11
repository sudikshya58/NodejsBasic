const express=require('express');
const path=require('path');
const app=express();
const mypath=path.join(__dirname,'public');
app.set('view engine','ejs');
app.get('/helpme',(req,resp)=>{
    resp.sendFile(`${mypath}/help.html`)
});
app.get('./profile',(req,resp)=>{
    resp.render('profile');
});
app.listen(5002);