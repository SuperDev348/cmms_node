
const businessclassificationModel = require('../models/businessclassification');
module.exports = {
    getById: async function(req, res, next) {	
        await businessclassificationModel.findById(req.params.businessclassificationId, async function(err, businessclassification){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=businessclassification;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        businessclassificationModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, businessclassifications){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: businessclassifications});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        businessclassificationModel.find({}, function(err, businessclassifications){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: businessclassifications});							
            }
        });
    },

    updateById:async function(req, res, next) {
        businessclassification={};
        if (req.body.strName !== undefined)
            businessclassification.strName=req.body.strName;
        
        businessclassificationModel.findByIdAndUpdate(req.params.businessclassificationId, businessclassification, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        businessclassificationModel.findByIdAndRemove(req.params.businessclassificationId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        businessclassification={};
        if (req.body.strName !== undefined)
            businessclassification.strName=req.body.strName;
        
        businessclassificationModel.create(businessclassification, function (err, result) {
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