function succes(res, data){
    res.status(200).send({
        status:"ok",
        data
    });
    return true;
}

function badRequest(res, err){
    res.status(400).send({
        status:"fail",
        message:"Bad request",
        err
    })
    return false;
}

module.exports = {
    succes,
    badRequest
}