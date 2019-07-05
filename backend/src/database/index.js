import mongoose from 'mongoose';

mongoose.connect('mongodb+srv://omni:omni123@cluster0-muldo.mongodb.net/crudMongo?retryWrites=true&w=majority', {
    useNewUrlParser: true,
})