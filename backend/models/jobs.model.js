const mongoose=require('mongoose');

const jobsSchema=mongoose.Schema({
        "company": String,
		"postedAt": String,
		"city": String,
		"location": String,
		"role": String,
		"level": String,
		"contract": String,
		"position": String,
		"language":String
},{
    versionKey:false
})

const jobsModel=mongoose.model('job',jobsSchema);

module.exports={jobsModel}