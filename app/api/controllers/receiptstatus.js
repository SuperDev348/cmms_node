
const receiptstatusModel = require('../models/receiptstatus');
module.exports = {
    getById: async function(req, res, next) {	
        await receiptstatusModel.findById(req.params.receiptstatusId, async function(err, receiptstatus){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=receiptstatus;
                res.status(200).json({msg: "ReceiptStatus found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        receiptstatusModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, receiptstatus){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: receiptstatus});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        receiptstatusModel.find({}, function(err, receiptstatus){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: receiptstatus});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let receiptstatus={};
        if (req.body.strName !== undefined)
            receiptstatus.strName=req.body.strName;
        if (req.body.intControlID !== undefined)
            receiptstatus.intControlID=req.body.intControlID;
        if (req.body.intSysCode !== undefined)
            receiptstatus.intSysCode=req.body.intSysCode;
        if (req.body.strDefaultLabel !== undefined)
            receiptstatus.strDefaultLabel=req.body.strDefaultLabel;
        if (req.body.intUpdated !== undefined)
            receiptstatus.intUpdated=req.body.intUpdated;
        
        receiptstatusModel.findByIdAndUpdate(req.params.receiptstatusId, receiptstatus, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        receiptstatusModel.findByIdAndRemove(req.params.receiptstatusId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let receiptstatus={};
        if (req.body.strName !== undefined)
            receiptstatus.strName=req.body.strName;
        if (req.body.intControlID !== undefined)
            receiptstatus.intControlID=req.body.intControlID;
        if (req.body.intSysCode !== undefined)
            receiptstatus.intSysCode=req.body.intSysCode;
        if (req.body.strDefaultLabel !== undefined)
            receiptstatus.strDefaultLabel=req.body.strDefaultLabel;
        if (req.body.intUpdated !== undefined)
            receiptstatus.intUpdated=req.body.intUpdated;
        
        receiptstatusModel.create(receiptstatus, function (err, result) {
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