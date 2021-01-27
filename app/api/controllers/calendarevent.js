
const calendareventModel = require('../models/calendarevent');
module.exports = {
    getById: async function(req, res, next) {	
        await calendareventModel.findById(req.params.calendareventId, async function(err, calendarevent){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=calendarevent;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        calendareventModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, calendarevents){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: calendarevents});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        calendareventModel.find({}, function(err, calendarevents){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: calendarevents});							
            }
        });
    },

    updateById:async function(req, res, next) {
        var calendarevent={};
        if (req.body.intScheduledMaintenanceID !== undefined)
            calendarevent.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
        if (req.body.intScheduleTriggerID !== undefined)
            calendarevent.intScheduleTriggerID=req.body.intScheduleTriggerID;
        if (req.body.dtmDate !== undefined)
            calendarevent.dtmDate=req.body.dtmDate;
        
        calendareventModel.findByIdAndUpdate(req.params.calendareventId, calendarevent, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        calendareventModel.findByIdAndRemove(req.params.calendareventId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        var calendarevent={};
        if (req.body.intScheduledMaintenanceID !== undefined)
            calendarevent.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
        if (req.body.intScheduleTriggerID !== undefined)
            calendarevent.intScheduleTriggerID=req.body.intScheduleTriggerID;
        if (req.body.dtmDate !== undefined)
            calendarevent.dtmDate=req.body.dtmDate;
        
        calendareventModel.create(calendarevent, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intScheduledMaintenanceID) {
                        res.status(400).json({ msg: err.errors.intScheduledMaintenanceID.message });
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