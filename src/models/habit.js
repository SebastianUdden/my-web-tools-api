import mongoose from 'mongoose';

const habitSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    rank: {
        type: Number,
    },
    startDate: {
        type: Date,
    },
    endDate: {
        type: Date,
    },
    occasions: {
        type: Array,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

const Habit = mongoose.model('Habit', habitSchema);

export default Habit;
