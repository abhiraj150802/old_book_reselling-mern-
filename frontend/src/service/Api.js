
import axios from "axios";
const URL="http://localhost:8000"
export const AuthenticateSignup=async(data)=>{
  try{
     return await axios.post(`${URL}/signup`,data)
  }catch(error){
      console.log(`error while signing up`,error.message);
  } 
}

export const AuthenticateLogin=async(data)=>{
  try{
     return await axios.post(`${URL}/login`,data)
  }catch(error){
      console.log(`error while login up`,error.message);
      return error.response;
  } 
}