import {Router,Route,Navigate, Routes} from "react-router-dom";

import Login from '../pages/Login';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';
import NotFound from '../pages/NotFound';

import {useAuth} from '../context/AuthContext';

const AppRoutes =()=>{
    const {user} = useAuth();

    return(
        <Routes>
            {/*login*/}
            <Route path="/" element={
                user ? <Navigate to="/dashboard"/> : <Login/>
                }
            />
            {/*register*/}
            <Route path="/register" element={
                user ? <Navigate to="/dashboard"/> : <Register/>
                }
            />
            {/*dashboard*/}
            <Route path="/dashboard" element={
                user?<Dashboard/>:<Navigate to="/"/>
                }
            />
            <Route path="*" element={<NotFound/>}/>
        </Routes>
    );
};
export default AppRoutes;