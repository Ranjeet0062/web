exports.localserverfile=async (req,res)=>{
    try{
        const file=req.files.file
        let path=__dirname +"/File/"+`${file.name}`
        file.mv(path,(err)=>{
            console.log("error acure while moving the file")
        })
        return res.status(200).json({
            "success":true,
            "massege":`file uploding successfully`
        })
    }catch(err){
        return res.status(200).json({
            "success":false,
            "massege":`error while file uploding and error is ${err}`
        })
    }
}