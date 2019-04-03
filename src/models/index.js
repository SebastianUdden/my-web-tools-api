import mongoose from 'mongoose';

import User from './user';
import Message from './message';

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI);
    // { useNewUrlParser: true }
};

const models = { User, Message };
export { connectDb };

export default models;
