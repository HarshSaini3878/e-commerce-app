import bcrypt from 'bcrypt';
export const hashPassword =async (password)=>{
try{   
    const SaltRounds=10;
    const hashPassword = await bcrypt.hash(password,SaltRounds);
    return hashPassword;
 }
catch(error){
console.log(error);
}

}
export const comparePassword =async (password,hashPassword)=>{
try{   
   
    const check = await bcrypt.compare(password,hashPassword);
    return check;
 }
catch(error){
console.log(error);
}

}