const express=require('express');
const cors=require('cors');
const { connection } = require('./config/db');
const { jobsRouter } = require('./routes/jobs.routes');
const { listRouter } = require('./routes/list.routes');
const app=express();
app.use(express.json());
app.use(cors())

app.use('/postings',jobsRouter);
app.use('/listings',listRouter);

app.listen(4500,async()=>{
    try{
        await connection;
      console.log('Connected with mongoDB')
    }catch(err){
        console.log('err:', err)
    }
    console.log('server running at port 4500')
})