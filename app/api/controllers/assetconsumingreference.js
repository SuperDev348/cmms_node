
const assetconsumingreferenceModel = require('../models/assetconsumingreference');
const assetsModel = require('../models/assets');
module.exports = {
    getById: async function(req, res, next) {	
        await assetconsumingreferenceModel.findById(req.params.assetconsumingreferenceId, async function(err, assetconsumingreference){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=assetconsumingreference;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        assetconsumingreferenceModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, assetconsumingreferences){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: assetconsumingreferences});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        assetconsumingreferenceModel.find({}, function(err, assetconsumingreferences){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: assetconsumingreferences});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let asset = await assetsModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        var assetconsumingreference={};
        if (req.body.intConsumesAssetID !== undefined)
            assetconsumingreference.intConsumesAssetID=req.body.intConsumesAssetID;
        if (req.body.intBOMControlID !== undefined)
            assetconsumingreference.intBOMControlID=req.body.intBOMControlID;
        if (req.body.intAssetID !== undefined)
            assetconsumingreference.intAssetID=req.body.intAssetID;
        if (req.body.intBOMPartControlID !== undefined)
            assetconsumingreference.intBOMPartControlID=req.body.intBOMPartControlID;
        if (req.body.qtyMaxConsumption !== undefined)
            assetconsumingreference.qtyMaxConsumption=req.body.qtyMaxConsumption;
        if (req.body.intUpdated !== undefined)
            assetconsumingreference.intUpdated=req.body.intUpdated;
        
        assetconsumingreferenceModel.findByIdAndUpdate(req.params.assetconsumingreferenceId, assetconsumingreference, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        assetconsumingreferenceModel.findByIdAndRemove(req.params.assetconsumingreferenceId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let assetconsumingreference=await assetconsumingreferenceModel.find({intConsumesAssetID:req.body.intConsumesAssetID, intBOMControlID:req.body.intBOMControlID, 
            intAssetID:req.body.intAssetID, intBOMPartControlID:req.body.intBOMPartControlID}).exec();	
        if(assetconsumingreference.length>0){
            res.status(400).json({ msg: "The record with the given ConsumesAsset, BOMControl, BOMPartControl and Asset already exists", data: null});
            return;
        }
        let asset = await assetsModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        assetconsumingreference={};
        if (req.body.intConsumesAssetID !== undefined)
            assetconsumingreference.intConsumesAssetID=req.body.intConsumesAssetID;
        if (req.body.intBOMControlID !== undefined)
            assetconsumingreference.intBOMControlID=req.body.intBOMControlID;
        if (req.body.intAssetID !== undefined)
            assetconsumingreference.intAssetID=req.body.intAssetID;
        if (req.body.intBOMPartControlID !== undefined)
            assetconsumingreference.intBOMPartControlID=req.body.intBOMPartControlID;
        if (req.body.qtyMaxConsumption !== undefined)
            assetconsumingreference.qtyMaxConsumption=req.body.qtyMaxConsumption;
        if (req.body.intUpdated !== undefined)
            assetconsumingreference.intUpdated=req.body.intUpdated;
        
        assetconsumingreferenceModel.create(assetconsumingreference, function (err, result) {
            if (err) {
                if (err.errors) {
                    if (err.errors.intConsumesAssetID) {
                        res.status(400).json({ msg: err.errors.intConsumesAssetID.message });
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