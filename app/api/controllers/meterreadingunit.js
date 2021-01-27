
const MeterReadingUnitModel = require('../models/meterreadingunit');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		MeterReadingUnitModel.findById(req.params.Id, function(err, asset){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: asset});
			}
		});
	},

	getAll: function(req, res, next) {
		MeterReadingUnitModel.find({}, function(err, status){
			if (err){
				res.status(500).json({ msg: "Internal Server error" });
			} else{				
				res.status(200).json({msg: "Result found!", data: status});							
			}

		});
	},

	updateById: function(req, res, next) {
		
		var content={};
		content.strName=req.body.strName;
		content.strDescription=req.body.strDescription;
		content.intPrecision=req.body.intPrecision;
		MeterReadingUnitModel.findByIdAndUpdate(req.params.Id,content, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		MeterReadingUnitModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: function(req, res, next) {
	
		var content={};
		content.strName=req.body.strName;
		content.strSymbol=req.body.strSymbol;
		content.intPrecision=req.body.intPrecision;
	
		MeterReadingUnitModel.create(content, function (err, result) {

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
	},
	

}					