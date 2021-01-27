
const drillModel = require('../models/drill');
module.exports = {
    getById: async function(req, res, next) {	
        await drillModel.findById(req.params.Id, async function(err, drill){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=drill;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        drillModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, drills){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: drills});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        drillModel.find({}, function(err, drills){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: drills});							
            }
        });
    },

    updateById: async function(req, res, next) {
        var drill={};
        if (req.body.strStatus !== undefined)
            drill.strStatus=req.body.strStatus;
        if (req.body.strCategory !== undefined)
            drill.strCategory=req.body.strCategory;
        if (req.body.strType !== undefined)
            drill.strType=req.body.strType;
        if (req.body.strTitle !== undefined)
            drill.strTitle=req.body.strTitle;
        if (req.body.intEstimatedTime !== undefined)
            drill.intEstimatedTime=req.body.intEstimatedTime;
        if (req.body.aDueDate !== undefined)
            drill.aDueDate=req.body.aDueDate;
        if (req.body.strGeneralAssignee !== undefined)
            drill.strGeneralAssignee=req.body.strGeneralAssignee;
        if (req.body.strGeneralDescription !== undefined)
            drill.strGeneralDescription=req.body.strGeneralDescription;
        if (req.body.aActionAssignCompletionDate !== undefined)
            drill.aActionAssignCompletionDate=req.body.aActionAssignCompletionDate;
        if (req.body.strActionNarrative !== undefined)
            drill.strActionNarrative=req.body.strActionNarrative;
        if (req.body.strActionNarrativeFuture !== undefined)
            drill.strActionNarrativeFuture=req.body.strActionNarrativeFuture;
        
        drillModel.findByIdAndUpdate(req.params.Id, drill, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        drillModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        var drill={};

        drill.strCode = "strCode";
        if (req.body.strStatus !== undefined)
            drill.strStatus=req.body.strStatus;
        if (req.body.strCategory !== undefined)
            drill.strCategory=req.body.strCategory;
        if (req.body.strType !== undefined)
            drill.strType=req.body.strType;
        if (req.body.strTitle !== undefined)
            drill.strTitle=req.body.strTitle;
        if (req.body.intEstimatedTime !== undefined)
            drill.intEstimatedTime=req.body.intEstimatedTime;
        if (req.body.aDueDate !== undefined)
            drill.aDueDate=req.body.aDueDate;
        if (req.body.strGeneralAssignee !== undefined)
            drill.strGeneralAssignee=req.body.strGeneralAssignee;
        if (req.body.strGeneralDescription !== undefined)
            drill.strGeneralDescription=req.body.strGeneralDescription;
        if (req.body.aActionAssignCompletionDate !== undefined)
            drill.aActionAssignCompletionDate=req.body.aActionAssignCompletionDate;
        if (req.body.strActionNarrative !== undefined)
            drill.strActionNarrative=req.body.strActionNarrative;
        if (req.body.strActionNarrativeFuture !== undefined)
            drill.strActionNarrativeFuture=req.body.strActionNarrativeFuture;
        
        drillModel.create(drill, function (err, result) {
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
                update_drill.strCode = "DR#" + result._id;
                drillModel.findByIdAndUpdate(result._id, update_drill, function(err, update){
                    res.status(201).json({msg: "Saved successfully!", data: {id:result._id, strCode:update_drill.strCode}});
                })
		});
    }
    
}					