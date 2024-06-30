const express = require('express');
const cors = require('cors');
const mysql = require('mysql')
const app = express();

const port = 5000;  

const corsOptions = {
    origin:'http://192.20.10.0:5000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}

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
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

