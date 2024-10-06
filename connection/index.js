const mongoose =require("mongoose");

const connectToDB = async ()=>{
    try{
        const conn = await mongoose.connect(`mongodb://localhost:27017/Ricoz`)
        console.log(`Mongodb connected: ${conn.connection.host}`)
    }
    catch(error){
        console.log("Error in Connection: ",error);
    }
}

module.exports  =connectToDB;