import {useState} from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { FaUser, FaEnvelope, FaLock } from "react-icons/fa";

import { registerUser } from '../services/authService';
const Register=()=> {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username:"",
    email:"",
    password:""});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setError(null);
  };
  const handleSubmit = async(e)=>{
    e.preventDefault();
    if(!formData.username || !formData.email || !formData.password){
        setError("Please enter username, email and password");
        return;
    }
    try{
        setLoading(true);
        const userData = await registerUser(formData);
        alert("Registration successful");
        navigate("/");
    }catch(error){
        setError(error.response?.data?.message || "registration failed");
    }finally{
        setLoading(false);
    }
  }
  return (
    <div className="h-screen flex">
            <div className="h-screen hidden md:flex w-1/2 bg-blue-600 text-white items-center justify-center p-10">
              <div>
                <h1 className="text-5xl font-bold mb-4">
                Todo App
                </h1>

                <p className="text-lg leading-8">
                Create your account and start managing your 
                daily tasks with easy. 
  
                </p>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex items-center justify-center bg-gray-100">
              <div className="bg-white shadow-xl rounded-xl p-8 w-[90%] max-w-md">
                <h2 className="text-3xl font-bold text-center mb-8">Register</h2>
                {error && (
                 <div className="bg-red-100 text-red-600 p-3 rounded-lg mb-5 text-center">
                  {error}
                 </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="md-5">
                        <label className="font-medium">
                         Username
                        </label>
                        <div className="flex items-center border rounded-lg mt-2 px-3">
                        <FaUser className="text-gray-400" />
                        <input
                         type="text"
                         name="username"
                         placeholder="Enter email"
                         value={formData.username}
                         onChange={handleChange}
                         className="w-full p-3 outline-none"
                        />
                        </div>
                    </div>
                          <div className="md-5">

              <label className="font-medium">
                Email
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaEnvelope className="text-gray-400" />

                <input
                  type="email"
                  name="email"
                  placeholder="Enter password"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                />
              </div>
            </div>
             <label className="font-medium">
                Password
              </label>

              <div className="flex items-center border rounded-lg mt-2 px-3">

                <FaLock className="text-gray-400" />

                <input
                  type="password"
                  name="password"
                  placeholder="Enter password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full p-3 outline-none"
                />

              </div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-lg font-semibold mt-4"
            >
              {loading ? "Creating account" : "Register"}
            </button>
                </form>
                <p className="text-center mt-6">

                 Already have an account?

            <Link
              to="/"
              className="text-blue-600 ml-2 font-semibold"
            >
             Login
            </Link>

          </p>
              </div>

            </div>
        </div>
  )
}

export default Register;