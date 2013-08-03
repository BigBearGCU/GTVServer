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
    data:"DorrithSimm.json"}),
        new testimony.TestimonyModel({name:"Susan Singerman",pic:"Anonymous.png",
            basicInfo:"For many years, Susan would not speak of her ordeal during the war. However, after retiring as a teacher, she began to speak to young people at schools about her experiences. She received hundreds of letters from school children saying how moved they had been by hearing her story. She felt it was vital that what had happened should not be forgotten. In 1996 she was made an MBE for services to the understanding of the Holocaust.",
            data:"SusanSingerman.json"})
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