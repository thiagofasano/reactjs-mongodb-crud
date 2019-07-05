import mongoose from 'mongoose';

const ProjectShema = new mongoose.Schema({
    title: String,
    description: String,
},
{
    timestamps: true,
})

export default mongoose.model('Project', ProjectShema);