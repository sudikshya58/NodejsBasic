const express=require('express');
const path=require('path');
const app=express();
const publics=path.join(__dirname,'public');
// app.use(express.static(publicpath));
app.get('',(req,resp)=>{
    resp.sendFile(`${publics}/home.html`)
    
});
app.set('view engine','ejs');

app.get('/helpme',(req,resp)=>{
    resp.sendFile(`${publics}/help.html`)
});
app.get('*',(req,resp)=>{
    resp.sendFile(`${publics}/error.html`)
});
app.get('/profile',(req,resp)=>{
    const user={
        name:'sudiksha kafle',
        address:'pokhara'
    }
    resp.render('profile',{user});
});
app.listen(5001);