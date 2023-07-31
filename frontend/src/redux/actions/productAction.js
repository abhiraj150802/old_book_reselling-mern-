import axios from "axios";
import * as actionTypes from '../constant/productConstant'
const URL='http://localhost:8000'



export const getProducts =()=> async(dispatch) => {
 try {
   let {data}= await axios.get(`${URL}/products`)
   dispatch({type:actionTypes.GET_PRODUCTS_SUCCESS,payload:data});
 } catch (error) {
    dispatch({type:actionTypes.GET_PRODUCTS_FAIL,payload:error.message});
 }
}


