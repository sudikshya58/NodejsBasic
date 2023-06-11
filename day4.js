//sync programming langauge

console.log("start exe");
setTimeout(()=>{
    console.log("logic compl")
},2000)
console.log("logic exe");


let a=20;
let b=40;
setTimeout(()=>{
    b=50;
},2000)
console.log(a+b);