const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

const corsOptions = {
    origin:'http://localhost:3000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}

const dbURI = 'mongodb+srv://cocobinocontact:Cocobino214--@cluster0.xf8knhg.mongodb.net/cocobinoTravels?retryWrites=true&w=majority';
mongoose.connect(dbURI,{useNewUrlParser: true, useUnifiedTopology: true})
    .then((result)=>{
        console.log('connected to db')
        app.listen(5000,()=>{
            console.log('listen to requests !')
        });
    })
    .catch((err)=>console.log(err))

app.use(cors(corsOptions));
app.use(express.json())


app.get('/',(req,res) => {
    res.send('<h1>Api is working</h1>')
})

const Schema = mongoose.Schema;
const clientSchema = new Schema({
    name:String,
    family_name:String,
    email:String
},{timestamps:true});

const Client = mongoose.model('clients', clientSchema); 

app.post('/test',(req,res) => {
    const {name,fName,email} = req.body;
    const client = new Client({
        name:name,
        family_name:fName,
        email:email
    });
    client.save()
        .then((result)=>console.log('succesfully saved to the detabase'))
        .catch((err)=>console.log(err));
    res.send({message:'Route found and called'})
})