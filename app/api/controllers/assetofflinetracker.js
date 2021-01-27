
const assetofflinetrackerModel = require('../models/assetofflinetracker');
module.exports = {
    getById: async function(req, res, next) {	
        await assetofflinetrackerModel.findById(req.params.assetofflinetrackerId, async function(err, assetofflinetracker){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=assetofflinetracker;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        assetofflinetrackerModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, assetofflinetrackers){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: assetofflinetrackers});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        assetofflinetrackerModel.find({}, function(err, assetofflinetrackers){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: assetofflinetrackers});							
            }
        });
    },

    updateById: function(req, res, next) {
        var assetofflinetracker={};
        if (req.body.intReasonOnlineID !== undefined)
            assetofflinetracker.intReasonOnlineID=req.body.intReasonOnlineID;
        if (req.body.strOnlineAdditionalInfo !== undefined)
            assetofflinetracker.strOnlineAdditionalInfo=req.body.strOnlineAdditionalInfo;
        if (req.body.dtmOffLineTo !== undefined)
            assetofflinetracker.dtmOffLineTo=req.body.dtmOffLineTo;
        if (req.body.intAssetID !== undefined)
            assetofflinetracker.intAssetID=req.body.intAssetID;
        if (req.body.strCity !== undefined)
            assetofflinetracker.strCity=req.body.strCity;
        if (req.body.dblProductionHoursAffected !== undefined)
            assetofflinetracker.dblProductionHoursAffected=req.body.dblProductionHoursAffected;
        if (req.body.dtmOfflineFrom !== undefined)
            assetofflinetracker.dtmOfflineFrom=req.body.dtmOfflineFrom;
        if (req.body.intReasonOfflineID !== undefined)
            assetofflinetracker.intReasonOfflineID=req.body.intReasonOfflineID;
        if (req.body.intSetOnlineByUserID !== undefined)
            assetofflinetracker.intSetOnlineByUserID=req.body.intSetOnlineByUserID;
        if (req.body.strOfflineAdditionalInfo !== undefined)
            assetofflinetracker.strOfflineAdditionalInfo=req.body.strOfflineAdditionalInfo;
        if (req.body.intSetOfflineByUserID !== undefined)
            assetofflinetracker.intSetOfflineByUserID=req.body.intSetOfflineByUserID;
        if (req.body.intWorkOrderID !== undefined)
            assetofflinetracker.intWorkOrderID=req.body.intWorkOrderID;
        
        assetofflinetrackerModel.findByIdAndUpdate(req.params.assetofflinetrackerId, assetofflinetracker, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        assetofflinetrackerModel.findByIdAndRemove(req.params.assetofflinetrackerId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        var assetofflinetracker={};
        if (req.body.intReasonOnlineID !== undefined)
            assetofflinetracker.intReasonOnlineID=req.body.intReasonOnlineID;
        if (req.body.strOnlineAdditionalInfo !== undefined)
            assetofflinetracker.strOnlineAdditionalInfo=req.body.strOnlineAdditionalInfo;
        if (req.body.dtmOffLineTo !== undefined)
            assetofflinetracker.dtmOffLineTo=req.body.dtmOffLineTo;
        if (req.body.intAssetID !== undefined)
            assetofflinetracker.intAssetID=req.body.intAssetID;
        if (req.body.strCity !== undefined)
            assetofflinetracker.strCity=req.body.strCity;
        if (req.body.dblProductionHoursAffected !== undefined)
            assetofflinetracker.dblProductionHoursAffected=req.body.dblProductionHoursAffected;
        if (req.body.dtmOfflineFrom !== undefined)
            assetofflinetracker.dtmOfflineFrom=req.body.dtmOfflineFrom;
        if (req.body.intReasonOfflineID !== undefined)
            assetofflinetracker.intReasonOfflineID=req.body.intReasonOfflineID;
        if (req.body.intSetOnlineByUserID !== undefined)
            assetofflinetracker.intSetOnlineByUserID=req.body.intSetOnlineByUserID;
        if (req.body.strOfflineAdditionalInfo !== undefined)
            assetofflinetracker.strOfflineAdditionalInfo=req.body.strOfflineAdditionalInfo;
        if (req.body.intSetOfflineByUserID !== undefined)
            assetofflinetracker.intSetOfflineByUserID=req.body.intSetOfflineByUserID;
        if (req.body.intWorkOrderID !== undefined)
            assetofflinetracker.intWorkOrderID=req.body.intWorkOrderID;
        
        assetofflinetrackerModel.create(assetofflinetracker, function (err, result) {
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