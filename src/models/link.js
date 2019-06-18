import mongoose from 'mongoose';

const linkSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    type: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    linkedId: {
        type: String,
    },
    createdAt: {
        type: Date,
    },
    updatedAt: {
        type: Date,
    },
});

const Link = mongoose.model('Link', linkSchema);

export default Link;
