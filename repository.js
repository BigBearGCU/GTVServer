/**
 * Created with JetBrains WebStorm.
 * User: brian
 * Date: 03/08/2013
 * Time: 16:52
 * To change this template use File | Settings | File Templates.
 */

var testimony=require("./model/testimonyModel");

exports.populateWithTestData=function()
{
    testimony.TestimonyModel.collection.drop();
    //add information
    var testData=[
        new testimony.TestimonyModel({name:"Dorrith Simm",pic:"Anonymous.png",
    basicInfo:"DORRITH SIM found solace in Scotland and penned book My Pocket about starting a new life in a foreign country, which is being distributed in schools across Renfrewshire to tie in with a website about the Holocaust.",
    data:"DorrithSimm.json"})



    ];

    testData.forEach(function(item)
    {
        item.save(function(err)
        {
            if (!err)
            {
                console.log(item);
            }
            else
            {
                console.log("error");
            }
        });
    });
};

exports.getAllTestimonies=function(callback)
{
    testimony.TestimonyModel.find(function (err, testimonies) {
        if (!err) {
            return callback(testimonies);
        }
    });
};