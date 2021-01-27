
const assetuserModel = require('../models/assetuser');					

module.exports = {
    getAllById: function(req, res, next) {		//get by group id
        assetuserModel.find({intUserID:req.params.Id})	
        .populate("intAssetID")		
        .then(function(data) {		
            var temp=[];
            for(var i=0;i<data.length;i++){
                if(data[i].intAssetID!=null){
                    temp.push(data[i]);
                }
            }
        res.status(200).json({msg: "Found!", data: temp});	
        })
        .catch(function(err) {		
        res.status(500).json({ msg: "Internal Server error" });
        });
    },

    getAll: function(req, res, next) {
        assetuserModel.find({intAssetID:req.params.Id})	
        .populate("intUserID")		
        .then(function(data) {		
        res.status(200).json({msg: "Found!", data: data});	
        })
        .catch(function(err) {		
        res.status(500).json({ msg: "Internal Server error" });
        });
    
    },

    updateById: async function(req, res, next) {
        
        var data={};
        data.intAssetUserTypeID=req.body.intAssetUserTypeID;
        data.intUserID=req.body.intUserID;
        data.intAssetID=req.body.intAssetID;
        let assetUser=await assetuserModel.find({intAssetID:req.body.intAssetID,intUserID:req.body.intUserID}).exec();	
            
        if(assetUser.length>0  ){
            if(assetUser[0]._id!=req.params.Id){
                res.status(400).json({ msg: "The record with the given Asset and User already exists", data: null});
                return;
            }
            }

        assetuserModel.findByIdAndUpdate(req.params.Id,data, function(err, movieInfo){

            if(err)
                res.status(400).json({ msg: "Save failed!" });
            else {
                res.status(200).json({ msg: "Saved successfully!", data:null});
            }
        });
    },

    deleteById: function(req, res, next) {
        assetuserModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        //The record with the given Asset and User already exists.
        let assetUser=await assetuserModel.find({intAssetID:req.body.intAssetID, intUserID:req.body.intUserID}).exec();	
        if(assetUser.length>0){
            res.status(400).json({ msg: "The record with the given Asset and User already exists", data: null});
            return;
        }
        console.log(assetUser,'assetUser');
        var data={};
        data.intAssetUserTypeID=req.body.intAssetUserTypeID;
        data.intUserID=req.body.intUserID;
        data.intAssetID=req.body.intAssetID;	
        assetuserModel.create(data, function (err, result) {
            if (err) {
                res.status(400).json({ msg: "Save failed", data: null});
            }				  
            else
                res.status(200).json({msg: "Saved successfully!", data: {id:result._id}});
        });
    },
}					