
const scheduledMaintenanceAssetModel = require('../models/scheduledmaintenanceasset');
const assetModel = require('../models/assets');
const scheduledmaintenanceModel = require('../models/scheduledmaintenance');
module.exports = {
    getById: async function(req, res, next) {	
        await scheduledMaintenanceAssetModel.findById(req.params.scheduledmaintenanceassetId, async function(err, scheduledmaintenanceasset){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=scheduledmaintenanceasset;
                res.status(200).json({msg: "scheduledmaintenanceasset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        scheduledMaintenanceAssetModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, scheduledmaintenanceasset){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: scheduledmaintenanceasset});							
            }     
        });
    }, 
    getAll: function(req, res, next) {
        scheduledMaintenanceAssetModel.find({}, function(err, scheduledmaintenanceasset){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: scheduledmaintenanceasset});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let scheduledmaintenace = await scheduledmaintenanceModel.findById(req.body.intScheduledMaintenanceID);
        if(scheduledmaintenace===null){
            res.status(400).json({ msg: "This scheduledmaintenace can not be avaiable.", data: null});
            return;
        }
        let scheduledmaintenanceasset={};
        if (req.body.intScheduledMaintenanceID !== undefined)
            scheduledmaintenanceasset.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
        if (req.body.intAssetID !== undefined)
            scheduledmaintenanceasset.intAssetID=req.body.intAssetID;
        
        scheduledMaintenanceAssetModel.findByIdAndUpdate(req.params.scheduledmaintenanceassetId, scheduledmaintenanceasset, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        scheduledMaintenanceAssetModel.findByIdAndRemove(req.params.scheduledmaintenanceassetId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let scheduledmaintenace = await scheduledmaintenanceModel.findById(req.body.intScheduledMaintenanceID);
        if(scheduledmaintenace===null){
            res.status(400).json({ msg: "This scheduledmaintenace can not be avaiable.", data: null});
            return;
        }
        let scheduledmaintenanceasset={};
        if (req.body.intScheduledMaintenanceID !== undefined)
            scheduledmaintenanceasset.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
        if (req.body.intAssetID !== undefined)
            scheduledmaintenanceasset.intAssetID=req.body.intAssetID;
        
        scheduledMaintenanceAssetModel.create(scheduledmaintenanceasset, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intAssetID) {
                        res.status(400).json({ msg: err.errors.intAssetID.message });
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