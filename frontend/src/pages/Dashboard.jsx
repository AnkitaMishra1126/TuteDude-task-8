import {useState , useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

import Navbar from '../components/Navbar';
import {useAuth} from '../context/AuthContext';

import AddTaskModal from '../components/AddTaskModal';
import EditTaskModal from '../components/EditTaskModal';
import EmptyState from '../components/EmptyState';
import Loader from '../components/Loader';

import {
  getTasks,
  deleteTask,
  searchTask,
} from '../services/taskService';


const Dashboard = () => {
  const navigate = useNavigate();
  const {user, logout} = useAuth();

  const [showAddModal, setShowAddModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  const [showEditModal, setShowEditModal] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);

  const fetchTasks= async()=>{
    try {
      const data = await getTasks(user.email);
      setTasks(data.list);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(()=>{
    if(user){
      fetchTasks();
    }
  },[user]);

  useEffect(() => {
  const timer = setTimeout(async () => {
    if (!user) return;
    if (search.trim() === "") {
      fetchTasks();
      return;
    }
    try {
      const data = await searchTask(search);
      setTasks(data);
    } catch (err) {
      console.log(err);
    }
  }, 500); 
  return () => clearTimeout(timer);
}, [search, user]);
  const handleLogout=()=>{
    logout();
    navigate("/");
  };

  const handleDelete=async(id)=>{
    try {
      await deleteTask(id, user.email);
      fetchTasks();
    } catch (err) {
      console.log(err);
    }
  };

  const handleEdit=(task)=>{
    setSelectedTask(task);
    setShowEditModal(true);
  };

 
  
  return(
    <div className='min-h-screen bg-gray-100'>
     <Navbar
       search={search}
       setSearch={setSearch}
       username={user?.username}
       onLogout={handleLogout}
     />
      <div className = "max-w-6xl mx-auto p-8">
        <h1 className='text-3xl font-bold'>My Tasks</h1>
        <button
        onClick={() => setShowAddModal(true)}
        className="bg-blue-600 hover:bg-blue-700 text-white  py-3 px-5 mt-4 rounded-lg">
          + Add Task
        </button>
      </div>
     {loading && <Loader/>}

      {!loading && tasks.length === 0 && (
        <EmptyState message="No tasks found"/>
      )}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-8">
        {tasks.map((task) => (
          <div
          key={task._id}
          className="bg-white shadow-lg rounded-xl p-5">
            <h2 className='text-xl font-bold'>
              {task.title}
            </h2>
            <p className="text-gray-600 mt-3">
              {task.body}
            </p>
            <div className="mt-4">
              <span 
              className={`inline-block px-4 py-1 rounded-full text-sm ${
                task.status === "completed"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-800"}`}>
                {task.status === "completed" ? "✔️Completed" : "⌛Pending"}
                </span>
            </div>
            <div className="flex gap-3 mt-6">
              <button 
              className="bg-green-600 text-white px-4 py-2 rounded-lg"
              onClick={() => handleEdit(task)}
              >
                Edit
              </button>
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg"
               onClick={() => handleDelete(task._id)}>
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <AddTaskModal
      isOpen={showAddModal}
      onClose={() => setShowAddModal(false)}
      onTaskAdded={fetchTasks}
      />
      <EditTaskModal
      isOpen={showEditModal}
      onClose={() => setShowEditModal(false)}
      task={selectedTask}
      onTaskUpdated={fetchTasks}
      />
    </div>
  );
}
export default Dashboard;