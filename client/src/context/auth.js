import { useState,useEffect,useContext,createContext} from "react";
import axios from 'axios'
const AuthContext=createContext();


const AuthProvider=({children})=>{
    const [Auth,SetAuth]=useState(
       { 
        user:null,
        token:""
    }
    );  

axios.defaults.headers.common['Authorization']=Auth?.token



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
//eslint-disable-next-line
    },[])
    return(

       <AuthContext.Provider value={[Auth,SetAuth]}>
        {children}
       </AuthContext.Provider>
    )
}
const useAuth=()=> useContext(AuthContext);
export {useAuth,AuthProvider};