
const fileModel = require('../models/file');
const workorderModel = require('../models/workorder');
const filecontentsModel = require('../models/filecontents');
module.exports = {
    getById: async function(req, res, next) {	
        await fileModel.findById(req.params.fileId, async function(err, file){
            if (err) {
                res.status(400).json({ msg: "Not found" });
            } else {
                let result=file;
                res.status(200).json({msg: "Asset found!", data: result});
            }
        });
    },
    getByFilterId :async function(req, res, next) {	
        var temp_filterIds=req.params.Id;
        temp_filterIds=temp_filterIds.split(",");
        fileModel.find({intCategoryID:{ $in: temp_filterIds}}, function(err, files){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{	
                res.status(200).json({msg: "List found!", data: files});							
            }
        });
    }, 
    getAll: function(req, res, next) {
        fileModel.find({}, function(err, files){
            if (err){
                res.status(500).json({ msg: "Internal Server error." });
            } else{				
                res.status(200).json({msg: "List found!", data: files});							
            }
        });
    },

    updateById:async function(req, res, next) {
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        let filecontent = await filecontentModel.findById(req.body.intFileContentsID);
        if(filecontent===null){
            res.status(400).json({ msg: "This filecontent can not be avaiable.", data: null});
            return;
        }
        let file={};
        if (req.body.intWorkOrderID !== undefined)
            file.intWorkOrderID=req.body.intWorkOrderID;
        if (req.body.intFileTypeID !== undefined)
            file.intFileTypeID=req.body.intFileTypeID;
        if (req.body.strName !== undefined)
            file.strName=req.body.strName;
        if (req.body.intSize !== undefined)
            file.intSize=req.body.intSize;
        if (req.body.strNotes !== undefined)
            file.strNotes=req.body.strNotes;
        if (req.body.intFileContentsID !== undefined)
            file.intFileContentsID=req.body.intFileContentsID;
        if (req.body.intAssetID !== undefined)
            file.intAssetID=req.body.intAssetID;
        if (req.body.strLink !== undefined)
            file.strLink=req.body.strLink;
        if (req.body.intUpdated !== undefined)
            file.intUpdated=req.body.intUpdated;
        if (req.body.strUuid !== undefined)
            file.strUuid=req.body.strUuid;
        
        fileModel.findByIdAndUpdate(req.params.fileId, file, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Update failed!" });
            else {
                res.status(200).json({ msg: "Updated successfully!", data:null});
            }
        });
    },

    deleteById: async function(req, res, next) {
        fileModel.findByIdAndRemove(req.params.fileId, function(err, movieInfo){
            if(err)
                res.status(400).json({ msg: "Delete failed!" });
            else {
                res.status(200).json({ msg: "Deleted successfully!"});
            }
        });
    },

    create: async function(req, res, next) {
        let workorder = await workorderModel.findById(req.body.intWorkOrderID);
        if(workorder===null){
            res.status(400).json({ msg: "This workorder can not be avaiable.", data: null});
            return;
        }
        let filecontent = await filecontentsModel.findById(req.body.intFileContentsID);
        if(filecontent===null){
            res.status(400).json({ msg: "This filecontent can not be avaiable.", data: null});
            return;
        }
        let file={};
        if (req.body.intWorkOrderID !== undefined)
            file.intWorkOrderID=req.body.intWorkOrderID;
        if (req.body.intFileTypeID !== undefined)
            file.intFileTypeID=req.body.intFileTypeID;
        if (req.body.strName !== undefined)
            file.strName=req.body.strName;
        if (req.body.intSize !== undefined)
            file.intSize=req.body.intSize;
        if (req.body.strNotes !== undefined)
            file.strNotes=req.body.strNotes;
        if (req.body.intFileContentsID !== undefined)
            file.intFileContentsID=req.body.intFileContentsID;
        if (req.body.intAssetID !== undefined)
            file.intAssetID=req.body.intAssetID;
        if (req.body.strLink !== undefined)
            file.strLink=req.body.strLink;
        if (req.body.intUpdated !== undefined)
            file.intUpdated=req.body.intUpdated;
        if (req.body.strUuid !== undefined)
            file.strUuid=req.body.strUuid;
        
        fileModel.create(file, function (err, result) {
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