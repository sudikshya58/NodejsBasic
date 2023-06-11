const MongoClient=require('mongodb1');
const url='mongodb://localhost:27007';
const database="ecommerce";
//url ko mongocleient ma pass garni
const client=new MongoClient(url)
async function getData()
{
    let result=client.connect();
  let db=  result.db(database);
  const collection=new MongoClient.model("collection1",db)
//   let collection=db.collection('products');//products is a collection name
//   console.log(collection.find({}).toArray());//toarray converted into structured format
  let response=await collection.find({}).toArray();//await is used to handle promise
  console.log(response);
}

getData();
module.exports=dbconnect;