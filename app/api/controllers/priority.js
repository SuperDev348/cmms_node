
const priorityModel = require('../models/priority');
module.exports = {
    getById: async function(req, res, next) {	
        await priorityModel.findById(req.params.priorityId, async function(err, priority){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=priority;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        priorityModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, prioritys){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: prioritys});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        priorityModel.find({}, function(err, prioritys){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: prioritys});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let priority={};
        if (req.body.strName !== undefined)
            priority.strName=req.body.strName;
        if (req.body.intOrder !== undefined)
            priority.intOrder=req.body.intOrder;
        if (req.body.intSysCode !== undefined)
            priority.intSysCode=req.body.intSysCode;
        if (req.body.intUpdated !== undefined)
            priority.intUpdated=req.body.intUpdated;
        if (req.body.strUuid !== undefined)
            priority.strUuid=req.body.strUuid;
        
        priorityModel.findByIdAndUpdate(req.params.priorityId, priority, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        priorityModel.findByIdAndRemove(req.params.priorityId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let priority={};
        if (req.body.strName !== undefined)
            priority.strName=req.body.strName;
        if (req.body.intOrder !== undefined)
            priority.intOrder=req.body.intOrder;
        if (req.body.intSysCode !== undefined)
            priority.intSysCode=req.body.intSysCode;
        if (req.body.intUpdated !== undefined)
            priority.intUpdated=req.body.intUpdated;
        if (req.body.strUuid !== undefined)
            priority.strUuid=req.body.strUuid;
        
        priorityModel.create(priority, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.strName) {
                        res.status(400).json({ msg: err.errors.strName.message });
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