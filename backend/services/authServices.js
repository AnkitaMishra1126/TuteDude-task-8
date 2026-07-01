import User from '../models/user.js';
import bcrypt from 'bcrypt';
const registerUser = async (email, username, password) => {
    const existingUser = await User.findOne({ email });
        if (existingUser) {
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ email, username, password: hashedPassword });
        await user.save();
        return user;

}

const signinUser = async (email, password) => {
         const user = await User.findOne({ email }).populate('list');
       if (!user) {
         throw new Error("Please sign up");
       }
       const isPasswordValid = await bcrypt.compare(password, user.password);
       if (!isPasswordValid) {
         throw new Error("Invalid password");
       }
       const userData = user.toObject();
       delete userData.password;
       return userData;
}
export { registerUser, signinUser };