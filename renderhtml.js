const express=require('express');
const app=express();
app.get("",(req,resp)=>{
resp.send(`<input type="text" placeholder="name"/>`
);
});

app.get('/help',(req,resp)=>{
    resp.send([{
        name:"sudikshya",
    email:'sudikshya.com'
    },
    {
    name:'samiksha',
    email:'samiksha.com'
    }

    ]);
})
app.listen(5000);