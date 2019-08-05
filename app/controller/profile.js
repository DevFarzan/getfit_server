const mongoose = require('mongoose');
const profile = mongoose.model('userProfile');


exports.userProfilePost = function(req, res, next){

    const objectId = req.body.objectId;
    const profileObj = req.body;
    const userId = req.body.userId;
    const date = req.body.date;
    const time = req.body.time;
    const email = req.body.email;
    const address = req.body.address;
    const contactNo = req.body.contactNo;
    const gender = req.body.gender;
    const image = req.body.image;


    if(objectId == '' || objectId == undefined){
    const profile_info = new profile({
        userId:userId,
        date:date,
        time:time,
        email:email,
        address:address,
        contactNo:contactNo,
        gender:gender,
        image:image,
        name:name
    })

    profile_info.save(function(err,dataProfile){
        if(err){
            res.send({
                code:404,
                msg:'no data inserted',
                content:[]
            })
        }
        else if(dataProfile){
            res.send({
                code:200,
                msg:'data is inserted',
                content:dataProfile
            })
        }
    })
}
else if(objectId != '' || objectId != undefined){
    profile.updateMany(
        {"_id":objectId},
        {$set: _.omit(profileObj, '_id')},
        {multi:true}
    ).then(() => {
        res.send({
            code:200,
            data:'profile data updated successfully'
        });
    }).catch(() => res.status(422).send({msg:'okay'}));
}
}