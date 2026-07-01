import { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { addTask } from "../services/taskService";

const AddTaskModal = ({isOpen, onClose,onTaskAdded})=>{
    const {user} = useAuth();

    const [formData,setFormData] = useState({
        title:"",
        body:"",
    }); 

    const[loading,setLoading] = useState(false);
    const[error,setError] = useState(null);
    if(!isOpen) return null;
    const handleChange= (e)=>{
        setFormData({
            ...formData,
            [e.target.name] : e.target.value
        });
        setError(null);
    };
    const handleSubmit = async(e)=>{
        e.preventDefault();
        if(!formData.title || !formData.body){
           return setError("Please enter title and body");
        }
        try{
            setLoading(true);
            const task = await addTask({...formData,email:user.email});
            onTaskAdded(task);
            onClose();
        }catch(error){
            setError(error.response?.data?.message || "something went wrong");
        }finally{
            setLoading(false);
        }
    };
    return(
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl w-[90%] max-w-md p-6 shadow-xl" >
                <h2 className="text-2xl font-bold mb-5">
                    Add New Task
                </h2>
                {error && (
                    <div className="bg-red-100 text-red-600 p-2 rounded-lg mb-4">{error}</div>
                )}
                <form onSubmit={handleSubmit}>
                  <div className="md-4">
                    <label className="font-medium">
                       Title
                    </label>
                    <input
                    type="text" 
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                    placeholder="Enter task title"
                    className="w-full border p-3 rounded-lg outline-none focus:border-sky-500"/>
                  </div>
                
                  <div className="mb-5">
                   <label className="font-medium">
                    Description                    
                   </label>
                   <textarea
                   name="body"
                   rows="4"
                   value={formData.body}
                   onChange={handleChange}
                   placeholder="Enter task description"
                   className="w-full border rounded-lg p-3 mt-2 outline-none resize-none focus:border-sky-500"
                   />
                  </div>
                  <div className="flex justify-end gap-2">
                         <button
                         type="button"
                         onClick={onClose}
                         className="px-5 py-2 rounded-lg border border-gray-300 hover:bg-gray-100"
                         >
                         Cancel
                         </button>
                         <button
                         type="submit"
                         disabled={loading}
                         className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg"
                         >
                         {loading ? "Adding..." : "Add Task"}
                         </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddTaskModal;