
const MeterReadingModel = require('../models/meterreading');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		MeterReadingModel.findById(req.params.assetId, function(err, asset){
			if (err) {
				res.status(400).json({ msg: "Asset not found" });
			} else {
				res.status(200).json({msg: "Asset found!", data: asset});
			}
		});
	},

	getAll: function(req, res, next) {
		
		MeterReadingModel.find({intAssetID:req.params.Id})
		// ..and populate all of the notes associated with it
		.populate("intMeterReadingUnitsID")		
		.populate("intSubmittedByUserID")		
		.then(function(data) {
			console.log(data,'result');
		  // If we were able to successfully find an Product with the given id, send it back to the client
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
			console.log(err);
		  // If an error occurred, send it to the client
		  res.status(500).json({ msg: "Internal Server error" });
		});		
	},

	updateById: function(req, res, next) {
		
		var content={};
		content.intWorkOrderID=req.body.intWorkOrderID;
		content.intSubmittedByUserID=req.body.intSubmittedByUserID;
		content.intMeterReadingUnitsID=req.body.intMeterReadingUnitsID;
		content.dblMeterReading=req.body.dblMeterReading;
		content.intAssetID=req.body.intAssetID;
		MeterReadingModel.findByIdAndUpdate(req.params.Id,content, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		MeterReadingModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: async function(req, res, next) {
	
		var content={};
		content.intWorkOrderID=req.body.intWorkOrderID;
		content.intSubmittedByUserID=req.body.intSubmittedByUserID;
		content.intMeterReadingUnitsID=req.body.intMeterReadingUnitsID;
		content.dblMeterReading=req.body.dblMeterReading;
		content.intAssetID=req.body.intAssetID;
		//content.dtmDateSubmitted=req.body.dtmDateSubmitted;
	 let MeterReadingUnit=await MeterReadingModel.findById(req.body.intMeterReadingUnitsID).exec();	
	
		await	MeterReadingModel.create(content, function (err, result) {
			if (err) {					
			  if (err.errors) {	
				  if (err.errors.intMeterReadingUnitsID) {
					  res.status(400).json({ msg: err.errors.intMeterReadingUnitsID.message });
					  return;
					}		
				   if (err.errors.dblMeterReading) {
					  res.status(400).json({ msg: err.errors.dblMeterReading.message });
					  return;
				  }
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

	//  else{
	// 	MeterReadingModel.findByIdAndUpdate(MeterReadingUnit._id,content, function(err, result){

	// 		if(err)
	// 			res.status(400).json({ msg: "Update failed!" });
	// 		else {
	// 			res.status(200).json({ msg: "Updated successfully!", data:null});
	// 		}
	// 	});
	//  }
	
	},
	

}					