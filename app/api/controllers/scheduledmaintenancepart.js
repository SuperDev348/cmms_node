
const scheduledmaintenancepartModel = require('../models/scheduledmaintenancepart');
module.exports = {
    getById: async function(req, res, next) {	
        await scheduledmaintenancepartModel.findById(req.params.scheduledmaintenancepartId, async function(err, scheduledmaintenancepart){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=scheduledmaintenancepart;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        scheduledmaintenancepartModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, scheduledmaintenanceparts){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: scheduledmaintenanceparts});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        scheduledmaintenancepartModel.find({}, function(err, scheduledmaintenanceparts){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: scheduledmaintenanceparts});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let scheduledmaintenance = await scheduledmaintenanceModel.findById(req.body.intScheduledMaintenanceID);
        if(scheduledmaintenance===null){
            res.status(400).json({ msg: "This scheduledmaintenance can not be avaiable.", data: null});
            return;
        }
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let scheduledmaintenancepart={};
        if (req.body.intScheduledMaintenanceID !== undefined)
            scheduledmaintenancepart.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
        if (req.body.intPartID !== undefined)
            scheduledmaintenancepart.intPartID=req.body.intPartID;
        if (req.body.intAssetID !== undefined)
            scheduledmaintenancepart.intAssetID=req.body.intAssetID;
        if (req.body.intStockID !== undefined)
            scheduledmaintenancepart.intStockID=req.body.intStockID;
        if (req.body.qtySuggestedQuantity !== undefined)
            scheduledmaintenancepart.qtySuggestedQuantity=req.body.qtySuggestedQuantity;
        
        scheduledmaintenancepartModel.findByIdAndUpdate(req.params.scheduledmaintenancepartId, scheduledmaintenancepart, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        scheduledmaintenancepartModel.findByIdAndRemove(req.params.scheduledmaintenancepartId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let scheduledmaintenance = await scheduledmaintenanceModel.findById(req.body.intScheduledMaintenanceID);
        if(scheduledmaintenance===null){
            res.status(400).json({ msg: "This scheduledmaintenance can not be avaiable.", data: null});
            return;
        }
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let scheduledmaintenancepart={};
        if (req.body.intScheduledMaintenanceID !== undefined)
            scheduledmaintenancepart.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
        if (req.body.intPartID !== undefined)
            scheduledmaintenancepart.intPartID=req.body.intPartID;
        if (req.body.intAssetID !== undefined)
            scheduledmaintenancepart.intAssetID=req.body.intAssetID;
        if (req.body.intStockID !== undefined)
            scheduledmaintenancepart.intStockID=req.body.intStockID;
        if (req.body.qtySuggestedQuantity !== undefined)
            scheduledmaintenancepart.qtySuggestedQuantity=req.body.qtySuggestedQuantity;
        
        scheduledmaintenancepartModel.create(scheduledmaintenancepart, function (err, result) {
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