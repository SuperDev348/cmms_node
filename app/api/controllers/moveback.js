
const movebackModel = require('../models/moveback');
const userModel = require('../models/users');
const movestatusModel = require('../models/movestatus');
module.exports = {
    getById: async function(req, res, next) {	
        await movebackModel.findById(req.params.movebackId, async function(err, moveback){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=moveback;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        movebackModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, movebacks){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: movebacks});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        movebackModel.find({}, function(err, movebacks){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: movebacks});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let movebackbyuserrid = await userModel.findById(req.body.intMovedBackUserID);
        if(movebackbyuserrid===null){
            res.status(400).json({ msg: "This 'move back by user id' can not be avaiable.", data: null});
            return;
        }
        let requestbyid = await userModel.findById(req.body.intRequestedByID);
        if(requestbyid===null){
            res.status(400).json({ msg: "This 'request by user id' can not be avaiable.", data: null});
            return;
        }
        let confirmbyid = await userModel.findById(req.body.intConfirmedByID);
        if(confirmbyid===null){
            res.status(400).json({ msg: "This 'confirm by user id' can not be avaiable.", data: null});
            return;
        }
        let rejectbyid = await userModel.findById(req.body.intRejectedByID);
        if(rejectbyid===null){
            res.status(400).json({ msg: "This 'reject by user id' can not be avaiable.", data: null});
            return;
        }
        let movestatus = await movestatusModel.findById(req.body.intRejectedByID);
        if(movestatus===null){
            res.status(400).json({ msg: "This movestatus can not be avaiable.", data: null});
            return;
        }
        
        moveback={};
        if (req.body.intMovedBackByUserID !== undefined)
            moveback.intMovedBackByUserID=req.body.intMovedBackByUserID;
        if (req.body.dtmMoveBackDate !== undefined)
            moveback.dtmMoveBackDate=req.body.dtmMoveBackDate;
        if (req.body.intRequestedByID !== undefined)
            moveback.intRequestedByID=req.body.intRequestedByID;
        if (req.body.dtmDateRequested !== undefined)
            moveback.dtmDateRequested=req.body.dtmDateRequested;
        if (req.body.intConfirmedByID !== undefined)
            moveback.intConfirmedByID=req.body.intConfirmedByID;
        if (req.body.dtmDateConfirmed !== undefined)
            moveback.dtmDateConfirmed=req.body.dtmDateConfirmed;
        if (req.body.intRejectedByID !== undefined)
            moveback.intRejectedByID=req.body.intRejectedByID;
        if (req.body.dtmDateCanceled !== undefined)
            moveback.dtmDateCanceled=req.body.dtmDateCanceled;
        if (req.body.intMoveStatusID !== undefined)
            moveback.intMoveStatusID=req.body.intMoveStatusID;
        if (req.body.intFromSiteID !== undefined)
            moveback.intFromSiteID=req.body.intFromSiteID;
        if (req.body.intSiteID !== undefined)
            moveback.intSiteID=req.body.intSiteID;
        if (req.body.strNotes !== undefined)
            moveback.strNotes=req.body.strNotes;
        
        movebackModel.findByIdAndUpdate(req.params.movebackId, moveback, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        movebackModel.findByIdAndRemove(req.params.movebackId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let movebackbyuserrid = await userModel.findById(req.body.intMovedBackUserID);
        if(movebackbyuserrid===null){
            res.status(400).json({ msg: "This 'move back by user id' can not be avaiable.", data: null});
            return;
        }
        let requestbyid = await userModel.findById(req.body.intRequestedByID);
        if(requestbyid===null){
            res.status(400).json({ msg: "This 'request by user id' can not be avaiable.", data: null});
            return;
        }
        let confirmbyid = await userModel.findById(req.body.intConfirmedByID);
        if(confirmbyid===null){
            res.status(400).json({ msg: "This 'confirm by user id' can not be avaiable.", data: null});
            return;
        }
        let rejectbyid = await userModel.findById(req.body.intRejectedByID);
        if(rejectbyid===null){
            res.status(400).json({ msg: "This 'reject by user id' can not be avaiable.", data: null});
            return;
        }
        let movestatus = await movestatusModel.findById(req.body.intRejectedByID);
        if(movestatus===null){
            res.status(400).json({ msg: "This movestatus can not be avaiable.", data: null});
            return;
        }
        moveback={};
        if (req.body.intMovedBackByUserID !== undefined)
            moveback.intMovedBackByUserID=req.body.intMovedBackByUserID;
        if (req.body.dtmMoveBackDate !== undefined)
            moveback.dtmMoveBackDate=req.body.dtmMoveBackDate;
        if (req.body.intRequestedByID !== undefined)
            moveback.intRequestedByID=req.body.intRequestedByID;
        if (req.body.dtmDateRequested !== undefined)
            moveback.dtmDateRequested=req.body.dtmDateRequested;
        if (req.body.intConfirmedByID !== undefined)
            moveback.intConfirmedByID=req.body.intConfirmedByID;
        if (req.body.dtmDateConfirmed !== undefined)
            moveback.dtmDateConfirmed=req.body.dtmDateConfirmed;
        if (req.body.intRejectedByID !== undefined)
            moveback.intRejectedByID=req.body.intRejectedByID;
        if (req.body.dtmDateCanceled !== undefined)
            moveback.dtmDateCanceled=req.body.dtmDateCanceled;
        if (req.body.intMoveStatusID !== undefined)
            moveback.intMoveStatusID=req.body.intMoveStatusID;
        if (req.body.intFromSiteID !== undefined)
            moveback.intFromSiteID=req.body.intFromSiteID;
        if (req.body.intSiteID !== undefined)
            moveback.intSiteID=req.body.intSiteID;
        if (req.body.strNotes !== undefined)
            moveback.strNotes=req.body.strNotes;
        
        movebackModel.create(moveback, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intMovedBackByUserID) {
                        res.status(400).json({ msg: err.errors.intMovedBackByUserID.message });
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