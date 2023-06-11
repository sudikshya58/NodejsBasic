const fs=require ('fs');
// fs.writeFileSync("sudiksha.txt","this is my 1st folder");
const path=require('path');
const dirPath=path.join(_dirname,'files');
for(i=0;i<5;i++)
{
    fs.writeFileSync("hello.txt","a simple dynamic" );
}
console.warn(dirPath);  