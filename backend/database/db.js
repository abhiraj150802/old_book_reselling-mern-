import mongoose from "mongoose";


 const Connection=async(USERNAME,PASSWORD)=>{
    const URL=`mongodb://${USERNAME}:${PASSWORD}@ac-sapphor-shard-00-00.fjytdhp.mongodb.net:27017,ac-sapphor-shard-00-01.fjytdhp.mongodb.net:27017,ac-sapphor-shard-00-02.fjytdhp.mongodb.net:27017/PROJECT?ssl=true&replicaSet=atlas-11ybvj-shard-0&authSource=admin&retryWrites=true&w=majority`
    try{
       await  mongoose.connect(URL,{useNewUrlParser: true, useUnifiedTopology: true});
       console.log(`database connected successfully`);
    }catch(error){
        console.log(`error while connecting with database is`,error.message);
    }
}
export default Connection;