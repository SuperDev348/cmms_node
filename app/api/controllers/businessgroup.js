
const businessgroupModel = require('../models/businessgroup');
module.exports = {
    getById: async function(req, res, next) {	
        await businessgroupModel.findById(req.params.businessgroupId, async function(err, businessgroup){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=businessgroup;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        businessgroupModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, businessgroups){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: businessgroups});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        businessgroupModel.find({}, function(err, businessgroups){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: businessgroups});							
            }
        });
    },

    updateById:async function(req, res, next) {
        var businessgroup={};
        if (req.body.bolIsDefaultManufacturer !== undefined)
            businessgroup.bolIsDefaultManufacturer=req.body.bolIsDefaultManufacturer;
        if (req.body.bolIsDefaultSupplier !== undefined)
            businessgroup.bolIsDefaultSupplier=req.body.bolIsDefaultSupplier;
        if (req.body.intRelationshipType !== undefined)
            businessgroup.intRelationshipType=req.body.intRelationshipType;
        if (req.body.strName !== undefined)
            businessgroup.strName=req.body.strName;
        
        businessgroupModel.findByIdAndUpdate(req.params.businessgroupId, businessgroup, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        businessgroupModel.findByIdAndRemove(req.params.businessgroupId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        var businessgroup={};
        if (req.body.bolIsDefaultManufacturer !== undefined)
            businessgroup.bolIsDefaultManufacturer=req.body.bolIsDefaultManufacturer;
        if (req.body.bolIsDefaultSupplier !== undefined)
            businessgroup.bolIsDefaultSupplier=req.body.bolIsDefaultSupplier;
        if (req.body.intRelationshipType !== undefined)
            businessgroup.intRelationshipType=req.body.intRelationshipType;
        if (req.body.strName !== undefined)
            businessgroup.strName=req.body.strName;
        
        businessgroupModel.create(businessgroup, function (err, result) {
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