const {Router}=require('express');
const { jobsModel } = require('../models/jobs.model');

const listRouter=Router();


listRouter.get('/',async(req,res)=>{
    try {
        const jobs=await jobsModel.find();
        res.status(200).send(jobs)
    } catch (error) {
            res.status(400).send({'msg':error.message})
        }
    })

module.exports={listRouter}