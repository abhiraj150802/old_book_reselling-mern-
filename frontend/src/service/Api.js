
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

// error  so yet to complete 
export const getProductById = async (id) => {
  try {
      return await axios.get(`${URL}/product/${id}`);
  } catch (error) {
      console.log('Error while getting product by id response', error);
  }
}

export  const payUsingPaytm = async (data) => {
  try {
      let response = await axios.post(`${URL}/payment`, data);
      return response.data;
  } catch (error) {
      console.log('Error', error);
  }
}