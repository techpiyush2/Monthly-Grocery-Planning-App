const  mongoose  = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const DB_URL = process.env.DB_URL


const Connect = async () => {
    try {
       await mongoose.connect(DB_URL)
       console.log("MongoDB Connected")
  }catch(err){
      console.log(err.message);
      process.exit
  }
}


module.exports = Connect