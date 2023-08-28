const Blog =require('../models/blogModel')



const getAllBlog =async(req,res)=>{
       try {
        const blogData = await Blog.find();

        if(blogData){
            res.status(200).send({
                message : "something wrong while fatching all blog",blogData
            })
        }
       } catch (error) {
             console.log(error)
       }

  
}

const createBlogp =async(req,res)=>{

      
      try {
        const  {name,description,image}=req.body 
           if(!name && !description && !image){
                res.status(401).send({message:"all fields are mandotry"});

           }
           const blogCretedata = await Blog.create({
            name,
            description,
            image
         })

        //if(blogCretedata){
            res.status(200).send(blogCretedata)
      } catch (error) {
        console.log(error)
      }
}

// const createBlogp=async(req,res)=>{
//     const {name,description,image}=req.body
//     if(!name && !description && !image){
//        res.status(400)
//        throw new Error("all fields are mandotry")
//     }
//     const contact=await Blog.create({
//         name,
//         description,
//         image
//     })
//     res.status(200).send(contact)

// }

const updateBlog = async(req,res)=>{
    
    try {
          
        const {name,description,image} =req.body
        // const updateblog = await Blog.findById(req.params.id);
        // if(!updateblog){
        //     return res.status(401).send({message:"data not found"});
        // }
          
       const upadatemyBlog =await Blog.findByIdAndUpdate(
        req.params.id,
        {...req.body},
        {new:true}
       )
     
     return  res.status(201).send({
       
        message:"blog has been updated",
        upadatemyBlog
    })



    } catch (error) {
        console.log(error)
    }

}


const deleteBlog =async(req,res)=>{
      try {
            const deleteBlogData = await Blog.findByIdAndDelete(req.params.id);
            if(!deleteBlogData){
                return res.status(401).send({message:"something wrong while deleting blog"});

            }
            res.status(200).send({message:"blog deleted successfully",deleteBlogData})
      } catch (error) {
        console.log(error)
      }
}

module.exports ={getAllBlog,createBlogp,updateBlog,deleteBlog}