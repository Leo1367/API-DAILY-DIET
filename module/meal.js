import mongoose from 'mongoose';

const Meal = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    dateTime: {
        type: Date,
        required: true,
    },
    isDiet: {
        type: Boolean,
        required: true,
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
})

export default mongoose.model('Meal', Meal)