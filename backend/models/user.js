import mongoose from 'mongoose';
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true
    },
    username: {
        type: String,
        required: true,
        trim: true,
    },
    password: {
        type: String,
        required: true
    },
    list:[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'List'
    }]
});
export default mongoose.model('User', userSchema);