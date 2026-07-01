import { createContext, useContext, useEffect, useState } from "react";
const AuthContext = createContext();
export const AuthProvider=({children})=>{
    //logged in user
    const [user, setUser] = useState(null);
    //loading state
    const [loading, setLoading] = useState(true);
    //check loaclstorage on app start
    useEffect(() => {
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
          setUser(JSON.parse(storedUser));
        }
        setLoading(false);
      }, []);
      //login
      const login = (userData)=>{
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
      };
      //logout
      const logout=()=>{
        setUser(null);
        localStorage.removeItem("user");
      };

    return(
        <AuthContext.Provider value={{
            user,
            login,
            logout,
            loading,
            }}>
            {children}
        </AuthContext.Provider>
    );
};
// custom hook 
export const useAuth=()=>useContext(AuthContext);