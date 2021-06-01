     
const billingtermModel = require('../models/billingterm');
module.exports = {
    getById: async function(req, res, next) {	
        await billingtermModel.findById(req.params.billingtermId, async function(err, billingterm){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=billingterm;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        billingtermModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, billingterms){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: billingterms});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        billingtermModel.find({}, function(err, billingterms){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: billingterms});							
            }
        });
    },

    updateById:async function(req, res, next) {
        billingterm={};
        if (req.body.strName !== undefined)
            billingterm.strName=req.body.strName;
        if (req.body.intUpdated !== undefined)
            billingterm.intUpdated=req.body.intUpdated;
        
        billingtermModel.findByIdAndUpdate(req.params.billingtermId, billingterm, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        billingtermModel.findByIdAndRemove(req.params.billingtermId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        billingterm={};
        if (req.body.strName !== undefined)
            billingterm.strName=req.body.strName;
        if (req.body.intUpdated !== undefined)
            billingterm.intUpdated=req.body.intUpdated;
        
        billingtermModel.create(billingterm, function (err, result) {
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