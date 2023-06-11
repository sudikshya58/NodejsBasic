const express=require('express');
const path=require('path');
const app=express();
const publicPath=path.join(__dirname,'htmlfile');
app.use(express.static(publicPath));//static is used for static page ko load garcha


console.log(__dirname);
app.listen(5000);