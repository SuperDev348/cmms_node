
const movestatusModel = require('../models/movestatus');
module.exports = {
    getById: async function(req, res, next) {	
        await movestatusModel.findById(req.params.movestatusId, async function(err, movestatus){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=movestatus;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        movestatusModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, movestatus){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: movestatus});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        movestatusModel.find({}, function(err, movestatus){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: movestatus});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let movestatus={};
        if (req.body.intSysCode !== undefined)
            movestatus.intSysCode=req.body.intSysCode;
        if (req.body.strDefaultLabel !== undefined)
            movestatus.strDefaultLabel=req.body.strDefaultLabel;
        if (req.body.strName !== undefined)
            movestatus.strName=req.body.strName;
        
        movestatusModel.findByIdAndUpdate(req.params.movestatusId, movestatus, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        movestatusModel.findByIdAndRemove(req.params.movestatusId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let movestatus={};
        if (req.body.intSysCode !== undefined)
            movestatus.intSysCode=req.body.intSysCode;
        if (req.body.strDefaultLabel !== undefined)
            movestatus.strDefaultLabel=req.body.strDefaultLabel;
        if (req.body.strName !== undefined)
            movestatus.strName=req.body.strName;
        
        movestatusModel.create(movestatus, function (err, result) {
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