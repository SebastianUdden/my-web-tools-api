import mongoose from 'mongoose';

import User from './user';
import Message from './message';
import Habit from './habit';
import Memory from './memory';
import Link from './link';

const connectDb = () => {
    return mongoose.connect(process.env.MONGODB_URI);
    // { useNewUrlParser: true }
};

const models = { User, Message, Habit, Memory, Link };
export { connectDb };

export default models;
