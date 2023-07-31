import User from "../model/user_schema.js";

const userSignup=async(req,resp)=>{
    try {
        const exist = await User.findOne({username:req.body.username})
        if(exist)
        {
            return resp.status(401).json({message:`username already exist`});
        }
        
      
         const user=req.body;
         //jo fontend se data aya usko validate kar rahe h
        const newUser=new User(user);
        await newUser.save();
        resp.status(200).json({message:user});
    }catch(error)
    {
         resp.status(500).json({message:error.message })
         console.log(`error while signing up and saving user in db , usercontroller`,error.message);
    }
}
export default userSignup;


export const userLogin=async(request,response)=>{
   try{
      const username=request.body.username;
      const password=request.body.password; 
      let exist=await User.findOne({username:username,password:password})
      if(exist)
      {
        return response.status(200).json({data:exist});
      }
      else{
        return response.status(401).json(`wrong details`);
      }
   }
   catch(error){
      return response.status(500).json(`error while login user`,error.message);
   }
}
