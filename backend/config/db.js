const mongoose=require('mongoose');

const connection=mongoose.connect(`mongodb+srv://anji:kommu@cluster0.dxyi0uo.mongodb.net/MasaiJobs?retryWrites=true&w=majority`)

module.exports={connection}