
const filecontentsModel = require('../models/filecontents');
module.exports = {
    getById: async function(req, res, next) {	
        await filecontentsModel.findById(req.params.filecontentsId, async function(err, filecontents){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=filecontents;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        filecontentsModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, filecontents){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: filecontents});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        filecontentsModel.find({}, function(err, filecontents){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: filecontents});							
            }
        });
    },

    updateById:async function(req, res, next) {
        var filecontents={};
        if (req.body.strName !== undefined)
            filecontents.strName=req.body.strName;
        if (req.body.strMimeType !== undefined)
            filecontents.strMimeType=req.body.strMimeType;
        if (req.body.intSize !== undefined)
            filecontents.intSize=req.body.intSize;
        if (req.body.intSysCode !== undefined)
            filecontents.intSysCode=req.body.intSysCode;
        if (req.body.strUuid !== undefined)
            filecontents.strUuid=req.body.strUuid;
        
        filecontentsModel.findByIdAndUpdate(req.params.filecontentsId, filecontents, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        filecontentsModel.findByIdAndRemove(req.params.filecontentsId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let filecontents=await filecontentsModel.find({strName:req.body.strName}).exec();	
        if(filecontents.length>0){
            res.status(400).json({ msg: "The record with the given Name already exists", data: null});
            return;
        }
        filecontents={};
        if (req.body.strName !== undefined)
            filecontents.strName=req.body.strName;
        if (req.body.strMimeType !== undefined)
            filecontents.strMimeType=req.body.strMimeType;
        if (req.body.intSize !== undefined)
            filecontents.intSize=req.body.intSize;
        if (req.body.intSysCode !== undefined)
            filecontents.intSysCode=req.body.intSysCode;
        if (req.body.strUuid !== undefined)
            filecontents.strUuid=req.body.strUuid;
        
        filecontentsModel.create(filecontents, function (err, result) {
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