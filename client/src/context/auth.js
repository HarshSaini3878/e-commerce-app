import { useState,useEffect,useContext,createContext} from "react";
const AuthContext=createContext();


const AuthProvider=({children})=>{
    const [Auth,SetAuth]=useState(
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
    },[Auth])
    return(

       <AuthContext.Provider value={[Auth,SetAuth]}>
        {children}
       </AuthContext.Provider>
    )
}
const useAuth=()=> useContext(AuthContext);
export {useAuth,AuthProvider};