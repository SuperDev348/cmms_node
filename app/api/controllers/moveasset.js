
const moveassetModel = require('../models/moveasset');
const assetModel = require('../models/assets');
const moveModel = require('../models/move');
module.exports = {
    getById: async function(req, res, next) {	
        await moveassetModel.findById(req.params.moveassetId, async function(err, moveasset){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=moveasset;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        moveassetModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, moveassets){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: moveassets});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        moveassetModel.find({}, function(err, moveassets){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: moveassets});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let move = await moveModel.findById(req.body.intMoveID);
        if(move===null){
            res.status(400).json({ msg: "This move can not be avaiable.", data: null});
            return;
        }
        moveasset={};
        if (req.body.intAssetID !== undefined)
            moveasset.intAssetID=req.body.intAssetID;
        if (req.body.intMoveID !== undefined)
            moveasset.intMoveID=req.body.intMoveID;
        if (req.body.intSiteID !== undefined)
            moveasset.intSiteID=req.body.intSiteID;
        if (req.body.bolAway !== undefined)
            moveasset.bolAway=req.body.bolAway;
        if (req.body.bolPending !== undefined)
            moveasset.bolPending=req.body.bolPending;
        if (req.body.bolSetOffline !== undefined)
            moveasset.bolSetOffline=req.body.bolSetOffline;
        if (req.body.intReasonOfflineID !== undefined)
            moveasset.intReasonOfflineID=req.body.intReasonOfflineID;
        if (req.body.bolSetOnline !== undefined)
            moveasset.bolSetOnline=req.body.bolSetOnline;
        if (req.body.intReasonOnlineID !== undefined)
            moveasset.intReasonOnlineID=req.body.intReasonOnlineID;
        if (req.body.dtmReturnDate !== undefined)
            moveasset.dtmReturnDate=req.body.dtmReturnDate;
        if (req.body.dtmDateReturned !== undefined)
            moveasset.dtmDateReturned=req.body.dtmDateReturned;
        if (req.body.intMovedFromID !== undefined)
            moveasset.intMovedFromID=req.body.intMovedFromID;
        if (req.body.strFromAisle !== undefined)
            moveasset.strFromAisle=req.body.strFromAisle;
        if (req.body.strFromRow !== undefined)
            moveasset.strFromRow=req.body.strFromRow;
        if (req.body.strFromBin !== undefined)
            moveasset.strFromBin=req.body.strFromBin;
        if (req.body.strNotes !== undefined)
            moveasset.strNotes=req.body.strNotes;
        if (req.body.bolExclude !== undefined)
            moveasset.bolExclude=req.body.bolExclude;

        moveassetModel.findByIdAndUpdate(req.params.moveassetId, moveasset, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        moveassetModel.findByIdAndRemove(req.params.moveassetId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let moveasset=await moveassetModel.find({intAssetID:req.body.intAssetID, intMoveID:req.body.intMoveID}).exec();	
        if(moveasset.length>0){
            res.status(400).json({ msg: "The record with the given Asset, Move already exists", data: null});
            return;
        }
        let asset = await assetModel.findById(req.body.intAssetID);
        if(asset===null){
            res.status(400).json({ msg: "This asset can not be avaiable.", data: null});
            return;
        }
        let move = await moveModel.findById(req.body.intMoveID);
        if(move===null){
            res.status(400).json({ msg: "This move can not be avaiable.", data: null});
            return;
        }
        moveasset={};
        if (req.body.intAssetID !== undefined)
            moveasset.intAssetID=req.body.intAssetID;
        if (req.body.intMoveID !== undefined)
            moveasset.intMoveID=req.body.intMoveID;
        if (req.body.intSiteID !== undefined)
            moveasset.intSiteID=req.body.intSiteID;
        if (req.body.bolAway !== undefined)
            moveasset.bolAway=req.body.bolAway;
        if (req.body.bolPending !== undefined)
            moveasset.bolPending=req.body.bolPending;
        if (req.body.bolSetOffline !== undefined)
            moveasset.bolSetOffline=req.body.bolSetOffline;
        if (req.body.intReasonOfflineID !== undefined)
            moveasset.intReasonOfflineID=req.body.intReasonOfflineID;
        if (req.body.bolSetOnline !== undefined)
            moveasset.bolSetOnline=req.body.bolSetOnline;
        if (req.body.intReasonOnlineID !== undefined)
            moveasset.intReasonOnlineID=req.body.intReasonOnlineID;
        if (req.body.dtmReturnDate !== undefined)
            moveasset.dtmReturnDate=req.body.dtmReturnDate;
        if (req.body.dtmDateReturned !== undefined)
            moveasset.dtmDateReturned=req.body.dtmDateReturned;
        if (req.body.intMovedFromID !== undefined)
            moveasset.intMovedFromID=req.body.intMovedFromID;
        if (req.body.strFromAisle !== undefined)
            moveasset.strFromAisle=req.body.strFromAisle;
        if (req.body.strFromRow !== undefined)
            moveasset.strFromRow=req.body.strFromRow;
        if (req.body.strFromBin !== undefined)
            moveasset.strFromBin=req.body.strFromBin;
        if (req.body.strNotes !== undefined)
            moveasset.strNotes=req.body.strNotes;
        if (req.body.bolExclude !== undefined)
            moveasset.bolExclude=req.body.bolExclude;
        
        moveassetModel.create(moveasset, function (err, result) {
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