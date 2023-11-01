import mongoose from 'mongoose';

const User = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type: String,
        required: true,
    },

})

export default mongoose.model('User', User)