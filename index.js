const http=require('http');//http node js bhitra server ko request and response handle garha node modulele
function dataControl((req,resp)=>
{
    resp.write("<h1>hello coder mega</h1>");
    resp.end();
})
http.createServer(dataControl).listen(4500);
