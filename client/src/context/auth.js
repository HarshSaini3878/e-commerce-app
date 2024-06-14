import { useState,useEffect,useContext,createContext} from "react";
const AuthContext=createContext();
const [Auth,SetAuth]=useState();

const AuthProvider=({children})=>{
    const [auth,SetAuth]=useState(
       { 
        user:null,
        token:""
    }
    );  
    useEffect(()=>{
const data=localStorage.getItem('Auth')
if(data){
    const parseData=JSON.parse(data)
    SetAuth({
        ...Auth,
        user:parseData.user,
        token:parseData.token
    })
}
    },[])
    return(

       <AuthContext.Provider value={[Auth,SetAuth]}>
        {children}
       </AuthContext.Provider>
    )
}
const useAuth=()=>{
    useContext(AuthContext)
}
export {useAuth,AuthProvider}