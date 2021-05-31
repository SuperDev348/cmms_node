
const eventtypeModel = require('../models/asseteventtype');					

module.exports = {
	getById: function(req, res, next) {	
		eventtypeModel.findById(req.params.Id, function(err, result){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: result});
			}
		});
	},

	getAll: function(req, res, next) {
		eventtypeModel.find({}, function(err, result){
			if (err){
				res.status(500).json({ msg: "Internal Server error" });
			} else{				
				res.status(200).json({msg: "Result found!", data: result});							
			}

		});
	},

	updateById: function(req, res, next) {
		
		var content={};
		content.strEventCode=req.body.strEventCode;
		content.strEventDescription=req.body.strEventDescription;
		content.strEventName=req.body.strEventName;
		eventtypeModel.findByIdAndUpdate(req.params.Id,content, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		eventtypeModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: function(req, res, next) {
	
		var content={};
		content.strEventCode=req.body.strEventCode;
		content.strEventDescription=req.body.strEventDescription;
		content.strEventName=req.body.strEventName;	
		eventtypeModel.create(content, function (err, result) {

				  if (err) {					
					if (err.errors) {	
						if (err.errors.strEventCode) {
							res.status(400).json({ msg: err.errors.strEventCode.message });
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