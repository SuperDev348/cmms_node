
const assetBusinessModel = require('../models/assetbusiness');					

module.exports = {
	getById: function(req, res, next) {
		
		assetBusinessModel.findById(req.params.Id, function(err, result){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: result});
			}
		});
	},

	getAll: function(req, res, next) {

		assetBusinessModel.find({intBusinessID:req.params.Id})
		.populate("intAssetID")		
		.then(function(data) {		
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
		  res.status(500).json({ msg: "Internal Server error" });
		});		
	},

	updateById: function(req, res, next) {
		
		var data={};
		data.intBusinessID=req.body.intBusinessID;
		data.intBusinessRoleTypeID=req.body.intBusinessRoleTypeID;
		data.intAssetID=req.body.intAssetID;
		data.bolSendRFQs=req.body.bolSendRFQs?true:false;
		data.bolPreferredVendor=req.body.bolPreferredVendor;
		data.qtyEconomicBatchQuantity=req.body.qtyEconomicBatchQuantity;
		data.strBusinessAssetNumber=req.body.strBusinessAssetNumber;
		data.intBusinessGroupID=req.body.intBusinessGroupID;
		data.strCategory=req.body.strCategory;
		assetBusinessModel.findByIdAndUpdate(req.params.Id,data, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		assetBusinessModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: function(req, res, next) {
	
		var data={};
		data.intBusinessID=req.body.intBusinessID;
		data.intBusinessRoleTypeID=req.body.intBusinessRoleTypeID;
		data.intAssetID=req.body.intAssetID;
		data.bolSendRFQs=req.body.bolSendRFQs?true:false;
		data.bolPreferredVendor=req.body.bolPreferredVendor;
		data.qtyEconomicBatchQuantity=req.body.qtyEconomicBatchQuantity;
		data.strBusinessAssetNumber=req.body.strBusinessAssetNumber;
		data.intBusinessGroupID=req.body.intBusinessGroupID;
		data.strCategory=req.body.strCategory;
	
		assetBusinessModel.create(data, function (err, result) {

				  if (err) {					
					res.status(400).json({ msg: "Creat failed", data: null});
				  }				  
				  else
				 	 res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
				  
				});
	},
	

}					