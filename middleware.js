const express=require('express');
const app=express();
// const reqFilter=require('./middleware')
// const route=express.Router();
const reqFilter=(req,resp,next)=>{
    if(req.query.age)
    {
        resp.send("please provide age")
    }
    else if(req.query.age>18){
        resp.send("you can not access this page");
    }

    else{
        next();
    }
    
}
//app.use(reqFilter); yeha used garda about user sabaima middleware used hhuncha

app.get('/',(req,resp)=>{
    resp.send('welcome to my home page');
})
app.get('/users',reqfilter,(req,resp)=>{//yeuta ma matra middlware used garda yesari lekhincha
    resp.send("welcome to my user page");
    
})
app.get('\about',(req,resp)=>{
    resp.send("welcome to page");
})
// route.get('/contact',(req,resp)=>{
//     resp.send("this is my contact page");
// }) yesari ni euta euta ma middleware used grna sakincha
app.listen(5001)