/**
 * Created by Dinesh Reddy Maddula on 5/18/2017.
 */
function CommonController() {

}
CommonController.prototype.get = function (commonModule,req,res,next,callback) {
    commonModule.find(req,function (err,data) {
        if(err){
            return next({status: 500, error: err});
        }else if(data==null||data==undefined||data=={}) {
            res.status(404).json({
                status:404,
                message : "File Not Found"
            })
        }else{
            res.status(200).send(data);
        }
    })
};
CommonController.prototype.getId = function (commonModule,req,res,next,callback) {
    commonModule.findId(req.params.id,function (err,data) {
        if(err){
            return next({status:500,error:err});
        }else if(data=null||data==undefined||data=={}){
            res.status(404).json({
                status:404,
                message:"File Not Found"
            })
        }else{
            res.status(200).send(data);
        }
    })
};
CommonController.prototype.post=function (commonModule,req,res,next,callback) {
    commonModule.create(req.body,function(err,data){
        if(err){
            return next({status:500,error:err});
        }else if(data==null||data==undefined||data=={}){
            res.status(404).json({
                status:404,
                message:"No Record to Create"
            })
        }else{
            res.status(201).send(data);
        }
    })
};
CommonController.prototype.put=function (commonModule,req,res,next,callback) {
    commonModule.change(req.params.id,function (err,data) {
        if(err){
            return next({status:500,error:err});
        }else if(data==null||data==undefined||data=={}){
            res.status(404).json({
                status:404,
                message:"No Record to Update"
            })
        }else {
            res.status(201).send(data);
        }
    })
};
CommonController.prototype.delete=function (commonModule,req,res,next,callback) {
    commonModule.remove(req.params.id,function (err,data) {
        if(err){
            return next({status:500,error:err});
        }else if (data==null||data==undefined||data=={}){
            res.status(404).json({
                status:404,
                message:"No Record Found to Delete"
            })
        }else{
            res.status(204).send(data);
        }
    })
};
module.exports=CommonController;