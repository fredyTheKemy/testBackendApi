const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').configDotenv();
const mongoose = require('mongoose'); 

const port = 5000;  
const uri = process.env.MONGODBURI;

const corsOptions = {
    origin:'http://localhost:3000/',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}

app.use(cors(corsOptions));
app.use(express.json());

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

//app.use('/test',(req,res)=>{res.send('<h1>welcome home cocoApi<h1>')})

app.get('/test', async (req,res) => {
    try {
        const result = await Voyage.find(); // Utilisation de await pour attendre la résolution de la promesse
        res.send(result);
    } catch (error) {
        res.status(500).send({ message: 'Internal Server Error', error: error.message });
    }
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

