

exports.all = (req,res) =>{


    console.log( req.socket.remoteAddress);
    res.status(200).json({
        status:"succes",
        data:"resource1 data"
    });
}; 
