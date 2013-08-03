/**
 * Created with JetBrains WebStorm.
 * User: brian
 * Date: 03/08/2013
 * Time: 16:31
 * To change this template use File | Settings | File Templates.
 */
var repo=require("../repository");

exports.list = function(req, res){
    console.log("Get Games");
    return repo.getAllTestimonies(function(testimonies)
    {
        return res.send(testimonies);
    });
};

exports.getTestimonyByName=function(req,res)
{
    console.log("get Testimony by name "+req.params.name);
    res.send("respond with a resource")
};


