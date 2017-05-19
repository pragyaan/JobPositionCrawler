/**
 * Created by Dinesh Reddy Maddula on 5/18/2017.
 */
var Model = require("../API/models/jobPositionModel.js"),
    CommonController = require("../utils/commonController.js");


function Controller() {
    var jpm = new Model;
    var controlUtil = new CommonController;
}
Controller.prototype.get = function (req,res,next) {
    controlUtil.get(jpm,req,res,next);
};
Controller.prototype.get = function (req,res,next) {
    controlUtil.getId(jpm,req,res,next);
};
Controller.prototype.get = function (req,res,next) {
    controlUtil.post(jpm,req,res,next);
};
Controller.prototype.get = function (req,res,next) {
    controlUtil.put(jpm,req,res,next);
};
Controller.prototype.get = function (req,res,next) {
    controlUtil.delete(jpm,req,res,next);
};
module.exports=Controller;