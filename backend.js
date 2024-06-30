const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express();
require('dotenv').configDotenv();
const mongoose = require('mongoose'); 

const port = 5000;  
const uri = process.env.MONGODBURI;

const corsOptions = {
    origin:'http://192.20.10.0:5000',
    origin:'http://192.20.10.0:5000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}

app.use(cors(corsOptions));
app.use(express.json());

app.use(cors(corsOptions));
app.use(express.json());

const connexion = mysql.createConnection({
    host: '51.91.236.255',    // Remplacez par l'adresse de votre serveur MySQL OVH
    user: 'shgvkgcadmin214', // Remplacez par votre nom d'utilisateur MySQL
    password: 'Cocobino214', // Remplacez par votre mot de passe MySQL
    database: 'shgvkgcadmin214' // Remplacez par le nom de votre base de données
});

connexion.connect((err)=>{
    if(err){
        console.log(err);
    } else {
        console.log('connected to the database')
    }
})

app.get('/test',(req,res) => {
    res.send('<h1>Api is working</h1>')
    let list = [{trqvel:'une semaine a paris'},{trqvel:'une semaine a paris'}]
    res.json({list})
})

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(()=>{
    console.log('sucessfully connected to MongoDB');
}).catch((error)=>{
    console.log('connection error', error.message);
});

//création du mongoose shema 

let voyageShema = new mongoose.Schema({
    titere:String,
    description:String,
    urls:String
});

const Voyage = mongoose.model('voyage',voyageShema);

async function saveTravel(){
    const voyage1 = new Voyage({
        titre:'une semaine a dubai',
        description:'Voyagez dans l un des pays le plus beaux au monde',
        urls:'https://res.cloudinary.com/dpistjmej/image/upload/f_auto,q_auto/lgl_ck1kvx//&&//https://res.cloudinary.com/dpistjmej/image/upload/f_auto,q_auto/cld-sample-5//&&//https://res.cloudinary.com/dpistjmej/image/upload/f_auto,q_auto/cld-sample-4'
    });

    const voyage2 = new Voyage({
        titre:'vacances de ski',
        description:'vous allez adorer la montage ici',
        urls:'https://res.cloudinary.com/dpistjmej/image/upload/f_auto,q_auto/lgl_ck1kvx//&&//https://res.cloudinary.com/dpistjmej/image/upload/f_auto,q_auto/cld-sample-5//&&//https://res.cloudinary.com/dpistjmej/image/upload/f_auto,q_auto/cld-sample-4'
    });

    await voyage1.save()
    await voyage2.save()
}

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

