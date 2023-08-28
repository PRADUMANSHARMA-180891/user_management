const User=require("../models/userModel");
const bcrypt =require("bcrypt");
const jwt =require("jsonwebtoken");


const registerUser=async(req,res)=>{
     const {name,email,password}=req.body

     if(!name && !email && !password){
        res.status(400);
        throw new Error ("all fields are mandotry")
     }
   
     const userAvailable=await User.findOne({email});
     if(userAvailable){
        res.status(400);
        throw new Error("this Email is Already exist !");
     }
     const hashPassword= await bcrypt.hash(password,0);
    

     const user=User.create({
        name,
        email,
        password:hashPassword
     })
     
     if(user){
        res.status(201).json({message:"user has been register succesfully"})
        
     }else{
      res.status(400);
      throw new Error("use data is not valid")
     }
   //  res.json({message:"register the user"})
    
}

// login for user
// const loginUser =async(req,res)=>{
//     const {email,password}  = req.body 
//     try {
//       if(!email && !password){
//            throw new Error("email or password require")
//       }
//       const user = await User.find({email});
//       if (user && bcrypt.compare(password,user.password)){
      
//          const accessToken=jwt.sign({
//             user:{
//                name:user.name,
//                email:user.email,
//                // id:user.id
//             }
            
//          },
//          process.env.ACCESS_TOKEN_SECRET,
//          {expiresIn:"20m"}
         
//          );
//          res.status(200).json({ accessToken });
//        }else{
//          res.status(401);
//          throw new Error("email or password is not valid")
//        }
   
   
   



      
      
//     } catch (error) {
//       console.log(error)
//     }

// }


// const loginmyUser=async(req,res)=>{
//    const {email,password}=req.body;
//    if(!email && !password){
//      res.status(404);
//      throw new Error("all fields are mandotry");
//    }
//    const user =await User.findOne({email})
//    if (user && bcrypt.compare(password,user.password)){
     
//      const accessToken=jwt.sign({
//         user:{
//            name:user.name,
//            email:user.email,
//          //   id:user.id
//         }
        
//      },
//      process.env.ACCESS_TOKEN_SECRET,
//      {expiresIn:"20m"}
     
//      );
//      res.status(200).json({ accessToken });
//    }else{
//      res.status(401);
//      throw new Error("email or password is not valid")
//    }


// }


const loginmyUser =async(req,res)=>{
      const {email,password} =req.body;

        try {
         if(!email  && !password){
            res.status(400);
            throw new Error("email and password is mandotry")
         }
   
         const user =await User.findOne({email});
         if(user  && bcrypt.compare(password,user.password)){
              
            const accessToken =jwt.sign({
               user :{
                   email:user.email,
                   password:user.password
               }
            },
   
            process.env.ACCESS_TOKEN_SECRET,
            {expiresIn:"1d"}
            
            
            )
           res.status(201).json(accessToken)
         }

        } catch (error) {
         console.log(error)
        }

      
}


module.exports={registerUser,loginmyUser}

