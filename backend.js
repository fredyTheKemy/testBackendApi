const express = require('express');
const cors = require('cors');
const app = express();

const port = 5000;  

const corsOptions = {
    origin:'http://192.20.10.0:5000',
    methods: 'GET,PUT,POST,DELETE',
    allowedHeaders:'Content-Type,Authorization'
}

app.use(cors(corsOptions));
app.use(express.json());

app.get('/test',(req,res) => {
    res.send('<h1>Api is working</h1>')
})

app.listen(port,()=>{
    console.log(`app is listening on port ${port}`)
})

