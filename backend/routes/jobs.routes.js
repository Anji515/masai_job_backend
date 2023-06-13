const {Router}=require('express');
const { jobsModel } = require('../models/jobs.model');

const jobsRouter=Router();


// jobsRouter.get('/',async(req,res)=>{
//     try {
//         const jobs=await jobsModel.find();
//         res.status(200).send(jobs)
//     } catch (error) {
    //         res.status(400).send({'msg':error.message})
    //     }
    // })
    jobsRouter.post('/create',async(req,res)=>{
        try {
            const job=jobsModel(req.body);
            await job.save();
            res.status(200).send({'msg':"New job added"})
        } catch (error) {
            res.status(400).send({'msg':error.message})
        }
    })
    
module.exports={jobsRouter}