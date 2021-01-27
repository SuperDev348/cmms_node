
const scheduledDrillModel = require('../models/scheduleddrill');
module.exports = {
    getById: async function(req, res, next) {	
        await scheduledDrillModel.findById(req.params.Id, async function(err, scheduleddrill){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=scheduleddrill;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        scheduledDrillModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, scheduleddrills){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: scheduleddrills});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        scheduledDrillModel.find({}, function(err, scheduleddrills){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: scheduleddrills});							
            }
        });
    },

    updateById: async function(req, res, next) {
        var scheduleddrill={};
        if (req.body.bStatus !== undefined)
            scheduleddrill.bStatus=req.body.bStatus;
        if (req.body.strCategory !== undefined)
            scheduleddrill.strCategory=req.body.strCategory;
        if (req.body.strType !== undefined)
            scheduleddrill.strType=req.body.strType;
        if (req.body.strTitle !== undefined)
            scheduleddrill.strTitle=req.body.strTitle;
        if (req.body.intEstimatedTime !== undefined)
            scheduleddrill.intEstimatedTime=req.body.intEstimatedTime;
        if (req.body.aDueDate !== undefined)
            scheduleddrill.aDueDate=req.body.aDueDate;
        if (req.body.strGeneralAssignee !== undefined)
            scheduleddrill.strGeneralAssignee=req.body.strGeneralAssignee;
        if (req.body.strGeneralDescription !== undefined)
            scheduleddrill.strGeneralDescription=req.body.strGeneralDescription;
        
        scheduledDrillModel.findByIdAndUpdate(req.params.Id, scheduleddrill, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        scheduledDrillModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        var scheduleddrill={};
        console.log(req.body);
        scheduleddrill.strCode = "strCode";
        if (req.body.bStatus !== undefined)
            scheduleddrill.bStatus=req.body.bStatus;
        if (req.body.strCategory !== undefined)
            scheduleddrill.strCategory=req.body.strCategory;
        if (req.body.strType !== undefined)
            scheduleddrill.strType=req.body.strType;
        if (req.body.strTitle !== undefined)
            scheduleddrill.strTitle=req.body.strTitle;
        if (req.body.intEstimatedTime !== undefined)
            scheduleddrill.intEstimatedTime=req.body.intEstimatedTime;
        if (req.body.aDueDate !== undefined)
            scheduleddrill.aDueDate=req.body.aDueDate;
        if (req.body.strGeneralAssignee !== undefined)
            scheduleddrill.strGeneralAssignee=req.body.strGeneralAssignee;
        if (req.body.strGeneralDescription !== undefined)
            scheduleddrill.strGeneralDescription=req.body.strGeneralDescription;
        
        scheduledDrillModel.create(scheduleddrill, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.strCategory) {
                        res.status(400).json({ msg: err.errors.strCategory.message });
                        return;
                    }
                }
                res.status(400).json({ msg: "Creat failed", data: null});
            }				  
            else
                var update_drill={};
                update_drill.strCode = "SDR#" + result._id;
                scheduledDrillModel.findByIdAndUpdate(result._id, update_drill, function(err, update){
                    res.status(201).json({msg: "Saved successfully!", data: {id:result._id, strCode:update_drill.strCode}});
                })
		});
    }
    
}					