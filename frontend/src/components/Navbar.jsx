
import {FaSearch, FaSignOutAlt, FaTasks, FaUserCircle} from 'react-icons/fa'
const Navbar=({
    search,
    setSearch,
    username="User",
    onLogout,
})=> {
    return(
      <nav className="w-full bg-white shadow-md">
       <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className='flex items-center gap-2'>
            <FaTasks className='text-2xl text-sky-600'/>
            <span className='text-2xl font-bold text-gray-800'>Taskify</span>
        </div>
        <div className='flex items-center gap-2 outline-1 border-gray-300 px-2 py-1 rounded-lg'>
         <FaSearch className='text-gray-500 mr-2'/>
         <input
         type="text"
         placeholder='Search tasks...'
         value={search}
         onChange={(e)=>setSearch(e.target.value)}
         className="bg-transparent outline-none w-full"/>
        </div>
        <div className="flex items-center gap-5">
          <div className="flex items-center gap-2">
            <FaUserCircle className='text-3xl text-sky-600'/>
            <span className='text-gray-800 font-medium'>
              {username}
            </span>
          </div>
          <button 
          onClick={onLogout} className='flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg transition'>
            <FaSignOutAlt/>
            Logout
          </button>
        </div>
    </div>
   </nav>
);
};



export default Navbar;