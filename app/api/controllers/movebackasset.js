
const movebackassetModel = require('../models/movebackasset');
const assetModel = require('../models/assets');
const movebackModel = require('../models/moveback');
const moveassetModel = require('../models/moveasset');
module.exports = {
    getById: async function(req, res, next) {	
        await movebackassetModel.findById(req.params.movebackassetId, async function(err, movebackasset){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=movebackasset;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        movebackassetModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, movebackassets){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: movebackassets});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        movebackassetModel.find({}, function(err, movebackassets){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: movebackassets});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let moveback = await movebackModel.findById(req.body.intMoveBackID);
        if(moveback===null){
            res.status(400).json({ msg: "This moveback can not be avaiable.", data: null});
            return;
        }
        let originalmoveasset = await moveassetModel.findById(req.body.intOriginalMoveAssetID);
        if(originalmoveasset===null){
            res.status(400).json({ msg: "This originalmoveasset can not be avaiable.", data: null});
            return;
        }
        movebackasset={};
        if (req.body.intAssetID !== undefined)
            movebackasset.intAssetID=req.body.intAssetID;
        if (req.body.intMoveBackID !== undefined)
            movebackasset.intMoveBackID=req.body.intMoveBackID;
        if (req.body.intOriginalMoveAssetID !== undefined)
            movebackasset.intOriginalMoveAssetID=req.body.intOriginalMoveAssetID;
        if (req.body.bolPending !== undefined)
            movebackasset.bolPending=req.body.bolPending;
        if (req.body.bolSetBackOnline !== undefined)
            movebackasset.bolSetBackOnline=req.body.bolSetBackOnline;
        if (req.body.intReasonOnlineID !== undefined)
            movebackasset.intReasonOnlineID=req.body.intReasonOnlineID;
        if (req.body.bolSetBackOffline !== undefined)
            movebackasset.bolSetBackOffline=req.body.bolSetBackOffline;
        if (req.body.intReasonOfflineID !== undefined)
            movebackasset.intReasonOfflineID=req.body.intReasonOfflineID;
        if (req.body.strToAisle !== undefined)
            movebackasset.strToAisle=req.body.strToAisle;
        if (req.body.strToBin !== undefined)
            movebackasset.strToBin=req.body.strToBin;
        if (req.body.strToRow !== undefined)
            movebackasset.strToRow=req.body.strToRow;
        if (req.body.intSiteID !== undefined)
            movebackasset.intSiteID=req.body.intSiteID;
        if (req.body.strNotes !== undefined)
            movebackasset.strNotes=req.body.strNotes;
        if (req.body.bolExclude !== undefined)
            movebackasset.bolExclude=req.body.bolExclude;
        
        movebackassetModel.findByIdAndUpdate(req.params.movebackassetId, movebackasset, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        movebackassetModel.findByIdAndRemove(req.params.movebackassetId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let movebackasset=await movebackassetModel.find({intAssetID:req.body.intAssetID, intMoveBackID:req.body.intMoveBackID}).exec();	
        if(movebackasset.length>0){
            res.status(400).json({ msg: "The record with the given Asset, MoveBackID already exists", data: null});
            return;
        }
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let moveback = await movebackModel.findById(req.body.intMoveBackID);
        if(moveback===null){
            res.status(400).json({ msg: "This moveback can not be avaiable.", data: null});
            return;
        }
        let originalmoveasset = await moveassetModel.findById(req.body.intOriginalMoveAssetID);
        if(originalmoveasset===null){
            res.status(400).json({ msg: "This originalmoveasset can not be avaiable.", data: null});
            return;
        }
        movebackasset={};
        if (req.body.intAssetID !== undefined)
            movebackasset.intAssetID=req.body.intAssetID;
        if (req.body.intMoveBackID !== undefined)
            movebackasset.intMoveBackID=req.body.intMoveBackID;
        if (req.body.intOriginalMoveAssetID !== undefined)
            movebackasset.intOriginalMoveAssetID=req.body.intOriginalMoveAssetID;
        if (req.body.bolPending !== undefined)
            movebackasset.bolPending=req.body.bolPending;
        if (req.body.bolSetBackOnline !== undefined)
            movebackasset.bolSetBackOnline=req.body.bolSetBackOnline;
        if (req.body.intReasonOnlineID !== undefined)
            movebackasset.intReasonOnlineID=req.body.intReasonOnlineID;
        if (req.body.bolSetBackOffline !== undefined)
            movebackasset.bolSetBackOffline=req.body.bolSetBackOffline;
        if (req.body.intReasonOfflineID !== undefined)
            movebackasset.intReasonOfflineID=req.body.intReasonOfflineID;
        if (req.body.strToAisle !== undefined)
            movebackasset.strToAisle=req.body.strToAisle;
        if (req.body.strToBin !== undefined)
            movebackasset.strToBin=req.body.strToBin;
        if (req.body.strToRow !== undefined)
            movebackasset.strToRow=req.body.strToRow;
        if (req.body.intSiteID !== undefined)
            movebackasset.intSiteID=req.body.intSiteID;
        if (req.body.strNotes !== undefined)
            movebackasset.strNotes=req.body.strNotes;
        if (req.body.bolExclude !== undefined)
            movebackasset.bolExclude=req.body.bolExclude;
        
        movebackassetModel.create(movebackasset, function (err, result) {
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