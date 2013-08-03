/**
 * Created with JetBrains WebStorm.
 * User: brian
 * Date: 03/08/2013
 * Time: 16:44
 * To change this template use File | Settings | File Templates.
 */

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var testimony = new Schema({
    name: { type: String, required: true },
    pic:{ type: String, required:true},
    basicInfo:{type:String, required:true},
    data:{type:String, required:true}
});

exports.TestimonyModel = mongoose.model('Testimony', testimony);
