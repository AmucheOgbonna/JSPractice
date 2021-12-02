const express = require("express");
const app = express();

let {people} = require('./data')

// static assets
app.use(express.static('./methods-public'))
// parse form data
app.use(express.urlencoded({extended:false}))
// parse Json
app.use(express.json())

app.get('/api/people', (req,res)=>{
  res.status(200).json({success:true, data:people})
})

app.post('/login', (req, res)=>{
  const {name}= req.body;
  if(name){
    return res.status(200).send(`Welcome ${name}`)
  }else{
    res.status(401).send(`Please Provide your credentials`)
  }
  res.send('POST')
})
app.post('/api/people', (req, res)=>{
  const {name}= req.body;
  if(!name){
    return res.status(400).json({success: false, msg:'Please Provide your Crendentials'})
  }else{
    res.status(201).send({success:true, person:name})
  }
  res.send('POST')
})
app.listen(5000, () => {
  console.log("Server is listening on port 5000");
});
 