import {useState, useEffect} from 'react'
import {useAuth} from '../context/AuthContext'
import {updateTask} from '../services/taskService'

const EditTaskModal = ({
    isOpen,
    onClose,
    task,
    onTaskUpdated,
}) => {
    const {user} = useAuth();
    const [formData, setFormData] = useState({ title:"", body:"",status:"pending"});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(()=>{
        if(task){
            setFormData({
                title:task.title,
                body:task.body,
                status:task.status,
            });
        }
    },[task]);
    if(!isOpen) return null;
    const handleChange = (e)=>{
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
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
            await updateTask(task._id,{
                ...formData,
                email:user.email,
            });
            onTaskUpdated();
            onClose();
        }catch(err){
            setError(err.response?.data?.message || "Failed to update task");
        }finally{
            setLoading(false);
        }
    };
    return(
        <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-xl w-[90%] max-w-md p-6 shadow-xl">
                <h2 className="text-2xl font-bold mb-5">Edit Task</h2>

                {error &&(
                    <div className='bg-red-100 text-red-600 p-3 rounded-lg mb-4'>
                        {error}
                    </div>
                )}
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label className='font-medium'>
                            Title
                        </label>
                        <input
                        type= "text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        className='w-full border rounded-lg p-3 mt-2 outline-none'/>
                    </div>
                    <div className="mb-4">
                        <label className='font-medium'>
                            Description  
                        </label>     
                        <textarea
                        rows='4'
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        className='w-full border rounded-lg p-3 mt-2 outline-none resize-none'/>
                    </div>

                    <div className="flex justify-end gap-3">
                        <button 
                        type="button" 
                        onClick={onClose} 
                        className="px-5 py-2 rounded-lg border"
                        >
                            Cancel
                        </button>
                        <button
                        type="submit"
                        disabled={loading}
                        className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-lg"
                        >
                           {loading ? "Updating..." : "Update Task"}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default EditTaskModal;
