import mongoose from 'mongoose';

const memorySchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
    dueDate: {
        type: Date,
    },
    tags: {
        type: Array,
    },
    children: {
        type: Array,
    },
    parents: {
        type: Array,
    },
});

const Memory = mongoose.model('Memory', memorySchema);

export default Memory;
