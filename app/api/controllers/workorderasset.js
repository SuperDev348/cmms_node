
const workorderassetModel = require('../models/workorderasset');
const workorderModel = require('../models/workorder');
const assetModel = require('../models/assets');
module.exports = {
    getById: async function(req, res, next) {	
        await workorderassetModel.findById(req.params.workorderassetId, async function(err, workorderasset){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=workorderasset;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        workorderassetModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, workorderassets){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: workorderassets});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        workorderassetModel.find({}, function(err, workorderassets){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: workorderassets});							
            }
        });
    },

    updateById: async function(req, res, next) {
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be available.", data: null});
            return;
        }
        var workorderasset={};
        if (req.body.intWorkOrderID !== undefined)
            workorderasset.intWorkOrderID=req.body.intWorkOrderID;
        if (req.body.intAssetID !== undefined)
            workorderasset.intAssetID=req.body.intAssetID;
        if (req.body.intUpdated !== undefined)
            workorderasset.intUpdated=req.body.intUpdated;
        
        workorderassetModel.findByIdAndUpdate(req.params.workorderassetId, workorderasset, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        workorderassetModel.findByIdAndRemove(req.params.workorderassetId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let workorderasset=await workorderassetModel.find({intWorkOrderID:req.body.intWorkOrderID, intAssetID:req.body.intAssetID}).exec();	
        if(workorderasset.length>0){
            res.status(400).json({ msg: "The record with the given Asset and WorkOrder already exists", data: null});
            return;
        }
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be available.", data: null});
            return;
        }
        workorderasset={};
        if (req.body.intWorkOrderID !== undefined)
            workorderasset.intWorkOrderID=req.body.intWorkOrderID;
        if (req.body.intAssetID !== undefined)
            workorderasset.intAssetID=req.body.intAssetID;
        if (req.body.intUpdated !== undefined)
            workorderasset.intUpdated=req.body.intUpdated;
        
        workorderassetModel.create(workorderasset, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intWorkOrderID) {
                        res.status(400).json({ msg: err.errors.intWorkOrderID.message });
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