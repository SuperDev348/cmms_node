
const workorderuserModel = require('../models/workorderuser');
const workorderModel = require('../models/workorder');
const userModel = require('../models/users');
module.exports = {
    getById: async function(req, res, next) {	
        await workorderuserModel.findById(req.params.workorderuserId, async function(err, workorderuser){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=workorderuser;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        workorderuserModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, workorderusers){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: workorderusers});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        workorderuserModel.find({}, function(err, workorderusers){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: workorderusers});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        var workorderuser={};
        if (req.body.intWorkOrderID !== undefined)
            workorderuser.intWorkOrderID=req.body.intWorkOrderID;
        if (req.body.intUserID !== undefined)
            workorderuser.intUserID=req.body.intUserID;
        if (req.body.bolNotifyOnAssignment !== undefined)
            workorderuser.bolNotifyOnAssignment=req.body.bolNotifyOnAssignment;
        if (req.body.bolNotifyOnCompletion !== undefined)
            workorderuser.bolNotifyOnCompletion=req.body.bolNotifyOnCompletion;
        if (req.body.bolNotifyOnOnlineOffline !== undefined)
            workorderuser.bolNotifyOnOnlineOffline=req.body.bolNotifyOnOnlineOffline;
        if (req.body.bolNotifyOnStatusChange !== undefined)
            workorderuser.bolNotifyOnStatusChange=req.body.bolNotifyOnStatusChange;
        if (req.body.bolNotifyOnTaskCompleted !== undefined)
            workorderuser.bolNotifyOnTaskCompleted=req.body.bolNotifyOnTaskCompleted;
        
        workorderuserModel.findByIdAndUpdate(req.params.workorderuserId, workorderuser, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        workorderuserModel.findByIdAndRemove(req.params.workorderuserId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let workorderuser=await workorderuserModel.find({intUserID:req.body.intUserID, intWorkOrderID:req.body.intWorkOrderID}).exec();	
        if(workorderuser.length>0){
            res.status(400).json({ msg: "The record with the given Asset, Business and BusinessGroup already exists", data: null});
            return;
        }
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        workorderuser={};
        if (req.body.intWorkOrderID !== undefined)
            workorderuser.intWorkOrderID=req.body.intWorkOrderID;
        if (req.body.intUserID !== undefined)
            workorderuser.intUserID=req.body.intUserID;
        if (req.body.bolNotifyOnAssignment !== undefined)
            workorderuser.bolNotifyOnAssignment=req.body.bolNotifyOnAssignment;
        if (req.body.bolNotifyOnCompletion !== undefined)
            workorderuser.bolNotifyOnCompletion=req.body.bolNotifyOnCompletion;
        if (req.body.bolNotifyOnOnlineOffline !== undefined)
            workorderuser.bolNotifyOnOnlineOffline=req.body.bolNotifyOnOnlineOffline;
        if (req.body.bolNotifyOnStatusChange !== undefined)
            workorderuser.bolNotifyOnStatusChange=req.body.bolNotifyOnStatusChange;
        if (req.body.bolNotifyOnTaskCompleted !== undefined)
            workorderuser.bolNotifyOnTaskCompleted=req.body.bolNotifyOnTaskCompleted;
        
        workorderuserModel.create(workorderuser, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intWorkOrderID) {
                        res.status(400).json({ msg: err.errors.intWorkOrderID.message });
                        return;
                    }
                }
                res.status(400).json({ msg: "Creat failed", data: null});
            }
            else
                res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
		});
    }
    
}					