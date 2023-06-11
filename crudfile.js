const file=require('file');
const path=require('path');
const dirPath=path.join(_dirname,'files');
const filePath=`${dirPath}/nodejs.txt`;
file.writeFileSync(filePath,"this is a node js file");
file.readFile(filepath,(err,item)=>{
    console.log(item)
})
file.appendFile(filePath,'used to append the file ',(err)=>{
    if(!err)console.log("file is updated");

})
file.rename(filePath,`${dirpath}/abc.txt`,(err)=>{
if(!err)console.log("file name is updated");
})
file.unlinksync(`${dirpath}/abc.txt`)//delete file