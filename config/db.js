
const mongoose =require('mongoose');

const DBconnection =async()=>{
     try {
        await mongoose.connect("mongodb://localhost:27017/usermanagementDB");
        console.log("db connection succefully")
     } catch (error) {
         console.log(error)
     }
   


}

module.exports =DBconnection