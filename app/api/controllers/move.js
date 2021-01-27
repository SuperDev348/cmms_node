
const moveModel = require('../models/move');
const businessModel = require('../models/business');
const userModel = require('../models/users');
const workorderModel = require('../models/workorder');
const projectModel = require('../models/project');
const movestatusModel = require('../models/movestatus');
module.exports = {
    getById: async function(req, res, next) {	
        await moveModel.findById(req.params.moveId, async function(err, move){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=move;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        moveModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, moves){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: moves});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        moveModel.find({}, function(err, moves){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: moves});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        let user = await userModel.findById(req.body.intUserDestinationID);
        if(user===null){
            res.status(400).json({ msg: "This user can not be avaiable.", data: null});
            return;
        }
        let business = await businessModel.findById(req.body.intBusinessDestinationID);
        if(business===null){
            res.status(400).json({ msg: "This business can not be avaiable.", data: null});
            return;
        }
        let project = await projectModel.findById(req.body.intProjectDestinationID);
        if(project===null){
            res.status(400).json({ msg: "This project can not be avaiable.", data: null});
            return;
        }
        let movestatus = await movestatusModel.findById(req.body.intMoveStatusID);
        if(movestatus===null){
            res.status(400).json({ msg: "This movestatus can not be avaiable.", data: null});
            return;
        }
        let move={};
        if (req.body.intDestinationTypeID !== undefined)
            move.intDestinationTypeID=req.body.intDestinationTypeID;
        if (req.body.intAssetDestinationID !== undefined)
            move.intAssetDestinationID=req.body.intAssetDestinationID;
        if (req.body.strAisle !== undefined)
            move.strAisle=req.body.strAisle;
        if (req.body.strRow !== undefined)
            move.strRow=req.body.strRow;
        if (req.body.strBin !== undefined)
            move.strBin=req.body.strBin;
        if (req.body.intUserDestinationID !== undefined)
            move.intUserDestinationID=req.body.intUserDestinationID;
        if (req.body.intBusinessDestinationID !== undefined)
            move.intBusinessDestinationID=req.body.intBusinessDestinationID;
        if (req.body.intWorkOrdrDestinationID !== undefined)
            move.intWorkOrdrDestinationID=req.body.intWorkOrdrDestinationID;
        if (req.body.intProjectDestinationID !== undefined)
            move.intProjectDestinationID=req.body.intProjectDestinationID;
        if (req.body.intSiteID !== undefined)
            move.intSiteID=req.body.intSiteID;
        if (req.body.intFromSiteID !== undefined)
            move.intFromSiteID=req.body.intFromSiteID;
        if (req.body.intMoveStatusID !== undefined)
            move.intMoveStatusID=req.body.intMoveStatusID;
        if (req.body.intMovedByID !== undefined)
            move.intMovedByID=req.body.intMovedByID;
        if (req.body.dtmMoveDate !== undefined)
            move.dtmMoveDate=req.body.dtmMoveDate;
            move.strNotes=req.body.strNotes;
        
        moveModel.findByIdAndUpdate(req.params.moveId, move, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        moveModel.findByIdAndRemove(req.params.moveId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        let user = await userModel.findById(req.body.intUserDestinationID);
        if(user===null){
            res.status(400).json({ msg: "This user can not be avaiable.", data: null});
            return;
        }
        let business = await businessModel.findById(req.body.intBusinessDestinationID);
        if(business===null){
            res.status(400).json({ msg: "This business can not be avaiable.", data: null});
            return;
        }
        let project = await projectModel.findById(req.body.intProjectDestinationID);
        if(project===null){
            res.status(400).json({ msg: "This project can not be avaiable.", data: null});
            return;
        }
        let movestatus = await movestatusModel.findById(req.body.intMoveStatusID);
        if(movestatus===null){
            res.status(400).json({ msg: "This movestatus can not be avaiable.", data: null});
            return;
        }
        let move={};
        if (req.body.intDestinationTypeID !== undefined)
            move.intDestinationTypeID=req.body.intDestinationTypeID;
        if (req.body.intAssetDestinationID !== undefined)
            move.intAssetDestinationID=req.body.intAssetDestinationID;
        if (req.body.strAisle !== undefined)
            move.strAisle=req.body.strAisle;
        if (req.body.strRow !== undefined)
            move.strRow=req.body.strRow;
        if (req.body.strBin !== undefined)
            move.strBin=req.body.strBin;
        if (req.body.intUserDestinationID !== undefined)
            move.intUserDestinationID=req.body.intUserDestinationID;
        if (req.body.intBusinessDestinationID !== undefined)
            move.intBusinessDestinationID=req.body.intBusinessDestinationID;
        if (req.body.intWorkOrdrDestinationID !== undefined)
            move.intWorkOrdrDestinationID=req.body.intWorkOrdrDestinationID;
        if (req.body.intProjectDestinationID !== undefined)
            move.intProjectDestinationID=req.body.intProjectDestinationID;
        if (req.body.intSiteID !== undefined)
            move.intSiteID=req.body.intSiteID;
        if (req.body.intFromSiteID !== undefined)
            move.intFromSiteID=req.body.intFromSiteID;
        if (req.body.intMoveStatusID !== undefined)
            move.intMoveStatusID=req.body.intMoveStatusID;
        if (req.body.intRequestedByID !== undefined)
            move.intRequestedByID=req.body.intRequestedByID;
        if (req.body.dtmDateRequested !== undefined)
            move.dtmDateRequested=req.body.dtmDateRequested;
        if (req.body.intMovedByID !== undefined)
            move.intMovedByID=req.body.intMovedByID;
        if (req.body.dtmMoveDate !== undefined)
            move.dtmMoveDate=req.body.dtmMoveDate;
        if (req.body.intConfirmedByID !== undefined)
            move.intConfirmedByID=req.body.intConfirmedByID;
        if (req.body.dtmDateConfirmed !== undefined)
            move.dtmDateConfirmed=req.body.dtmDateConfirmed;
        if (req.body.intRejectedByID !== undefined)
            move.intRejectedByID=req.body.intRejectedByID;
        if (req.body.dtmDateRejected !== undefined)
            move.dtmDateRejected=req.body.dtmDateRejected;
        if (req.body.strNotes !== undefined)
            move.strNotes=req.body.strNotes;
        
        moveModel.create(move, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intDestinationTypeID) {
                        res.status(400).json({ msg: err.errors.intDestinationTypeID.message });
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