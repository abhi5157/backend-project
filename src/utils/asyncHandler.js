const asyncHandler = (requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((err) => next(err))
    
}

}

export {asyncHandler}





// const asyncHandler = ()=> {}
// const asyncHandler = (func)=> {async  ()=>{ } }
// const asyncHandler = (func)=> async  ()=>{ } 

// const asyncHandler = (func)=> async  (err,req,res,next)=>{ 
// try{
//    await fn(req, res, next){}
// }
// catch(error){
//     res.status(error.code || 500).json({
//         success : false,
//         message : err.message
//     })
// }

// } 
