
const accountModel = require('../models/account');					

module.exports = {
	getById: function(req, res, next) {
		console.log(req.body);
		accountModel.findById(req.params.Id, function(err, result){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: result});
			}
		});
	},

	getAll: function(req, res, next) {
		accountModel.find({}, function(err, result){
			if (err){
				res.status(500).json({ msg: "Internal Server error" });
			} else{				
				res.status(200).json({msg: "Result found!", data: result});							
			}

		});
	},

	updateById: function(req, res, next) {
		
		var account={};
		account.strCode=req.body.strCode;
		account.strDescription=req.body.strDescription;
		accountModel.findByIdAndUpdate(req.params.Id,account, function(err, result){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		accountModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: function(req, res, next) {
	
		var account={};
		account.strCode=req.body.strCode;
		account.strDescription=req.body.strDescription;
	
		accountModel.create(account, function (err, result) {

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