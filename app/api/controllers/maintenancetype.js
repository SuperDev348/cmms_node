
const maintenancetypeModel = require('../models/maintenancetype');
module.exports = {
    getById: async function(req, res, next) {	
        await maintenancetypeModel.findById(req.params.maintenancetypeId, async function(err, maintenancetype){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=maintenancetype;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        maintenancetypeModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, maintenancetypes){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: maintenancetypes});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        maintenancetypeModel.find({}, function(err, maintenancetypes){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: maintenancetypes});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let maintenancetype={};
        if (req.body.strName !== undefined)
            maintenancetype.strName=req.body.strName;
        if (req.body.intSysCode !== undefined)
            maintenancetype.intSysCode=req.body.intSysCode;
        if (req.body.strColor !== undefined)
            maintenancetype.strColor=req.body.strColor;
        if (req.body.intUpdated !== undefined)
            maintenancetype.intUpdated=req.body.intUpdated;
        if (req.body.strUuid !== undefined)
            maintenancetype.strUuid=req.body.strUuid;
        
        maintenancetypeModel.findByIdAndUpdate(req.params.maintenancetypeId, maintenancetype, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        maintenancetypeModel.findByIdAndRemove(req.params.maintenancetypeId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let maintenancetype={};
        if (req.body.strName !== undefined)
            maintenancetype.strName=req.body.strName;
        if (req.body.intSysCode !== undefined)
            maintenancetype.intSysCode=req.body.intSysCode;
        if (req.body.strColor !== undefined)
            maintenancetype.strColor=req.body.strColor;
        if (req.body.intUpdated !== undefined)
            maintenancetype.intUpdated=req.body.intUpdated;
        if (req.body.strUuid !== undefined)
            maintenancetype.strUuid=req.body.strUuid;
        
        maintenancetypeModel.create(maintenancetype, function (err, result) {
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