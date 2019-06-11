import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import Habit from './habit';

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI);
    // { useNewUrlParser: true }
};

const models = { User, Message, Habit };
export { connectDb };

export default models;
