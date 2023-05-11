const error_handler =(err, req ,res, next) =>{
    if(err.status ){
        console.log(err);
        res.json({
            "message": err.message
        })
    }else{
        console.log(err)
        res.json({message: "Internal Server Error"}).status(500)
    }
}
    

module.exports=error_handler 