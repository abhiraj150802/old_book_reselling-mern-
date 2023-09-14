import Product from "../model/product_schema.js"

export const getProducts=async(req,resp)=>{
   try{
       const products=await Product.find({})
       resp.status(200).json(products); 
   }
   catch(error)
   {
       resp.status(500).json({message:error.message})
   }
}



export const getProductById=async(req,resp)=>{
   try{
        const id=req.params.id;
        const product=await Product.findOne({'id':id})
      
        if(product)
         resp.status(200).json(product)
   }
   catch(error)
   {
        resp.status(500).json({message:error.message})
   }
}