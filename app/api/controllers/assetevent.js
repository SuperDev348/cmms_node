
const asseteventModel = require('../models/assetevent');					

module.exports = {
	
	getAll: function(req, res, next) {
		asseteventModel.find({intAssetID:req.params.assetId})	
		.populate("intAssetEventTypeID")
		.populate("intSubmittedByUserID")
		.then(function(data) {		
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {		
		  res.status(500).json({ msg: "Internal Server error" });
		});
		
	},

	updateById: function(req, res, next) {
		var content={};
		content.intAssetEventTypeID=req.body.intAssetEventTypeID;
		content.intAssetID=req.body.intAssetID;
		content.intSubmittedByUserID=req.body.intSubmittedByUserID;
		content.intWorkOrderID=req.body.intWorkOrderID;
		content.strAdditionalDescription=req.body.strAdditionalDescription;	
		asseteventModel.findByIdAndUpdate(req.params.Id,content, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		asseteventModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!"});
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: function(req, res, next) {	
		var content={};
		content.intAssetEventTypeID=req.body.intAssetEventTypeID;
		content.intAssetID=req.body.intAssetID;
		content.intSubmittedByUserID=req.body.intSubmittedByUserID;
		content.intWorkOrderID=req.body.intWorkOrderID;
		content.strAdditionalDescription=req.body.strAdditionalDescription;	
		asseteventModel.create(content, function (err, result) {
				  if (err) {					
					if (err.errors) {	
						if (err.errors.intAssetEventTypeID) {
							res.status(400).json({ msg: err.errors.intAssetEventTypeID.message });
							return;
						  }		
						  if (err.errors.intAssetID) {
							res.status(400).json({ msg: err.errors.intAssetID.message });
							return;
						  }					
					}
					res.status(400).json({ msg: "Creat failed.", data: null});
				  }				  
				  else
				 	 res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
				  
				});
	},	

}					