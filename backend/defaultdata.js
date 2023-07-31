import { products } from "./constant/data.js";
// a constant h db mai rakha h
import product from "./model/product_schema.js";
// a model h

const Defaultdata=async()=>{
   try{
        await product.insertMany(products);
         console.log(`data inserted in db successfully`);
   }catch(err){
      console.log(`error while inserting data from database`,err.message);
   }
}
export default  Defaultdata;