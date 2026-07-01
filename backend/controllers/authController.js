import { registerUser, signinUser } from "../services/authServices.js";

//register 
const register = async (req, res) => {
    try{
        const { email, username, password } = req.body;
        if (!email || !username || !password) {
        return res.status(400).json({
        message: "All fields are required"
        });
      }
        const user = await registerUser(email, username, password);
        res.status(201).json({ user});
        
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};

//sign in
const signin = async (req, res) => {
    try{
       const {email, password}= req.body;
       if (!email || !password) {
        return res.status(400).json({
        message: "Email and Password are required"
       });
    }
    const user= await signinUser(email, password);
       res.status(200).json({ user });
       
    }catch(err){
        res.status(400).json({ message: err.message });
    }
};
export { register, signin };