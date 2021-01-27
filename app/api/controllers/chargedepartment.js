
const chargedepartmentModel = require('../models/chargedepartment');					

module.exports = {
	getById: function(req, res, next) {
		
		chargedepartmentModel.findById(req.params.Id, function(err, result){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: result});
			}
		});
	},

	getAll: async function(req, res, next) {
		let result = await chargedepartmentModel.aggregate([
			{
			  $lookup: {
				from: "assets",
				localField: "intFacilityID",
				foreignField: "_id",
				as: "facilties",
			  },
			},
		  ]);
		res.status(200).json({msg: "Result found!", data: result});		
		// chargedepartmentModel.find({}, function(err, result){
		// 	if (err){
		// 		res.status(500).json({ msg: "Internal Server error" });
		// 	} else{				
		// 		res.status(200).json({msg: "Result found!", data: result});							
		// 	}

		// });
	},

	updateById: function(req, res, next) {
		
		var content={};
		content.strCode=req.body.strCode;
		content.strDescription=req.body.strDescription;
		content.intFacilityID=req.body.intFacilityID;

		chargedepartmentModel.findByIdAndUpdate(req.params.Id,content, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		chargedepartmentModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: function(req, res, next) {
	
		var content={};
		content.strCode=req.body.strCode;
		content.strDescription=req.body.strDescription;
		content.intFacilityID=req.body.intFacilityID;
	
		chargedepartmentModel.create(content, function (err, result) {

				  if (err) {					
					if (err.errors) {	
						if (err.errors.strCode) {
							res.status(400).json({ msg: err.errors.strCode.message });
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