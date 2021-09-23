
const businessUserModel = require('../models/businessuser');					

module.exports = {
	getAllById: function(req, res, next) {		//get by group id
		businessUserModel.find({intUserID:req.params.Id})	
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
		businessUserModel.find({intBusinessID:req.params.Id})	
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
		data.intUserID=req.body.intUserID;
		data.intBusinessID=req.body.intBusinessID;
		let assetUser=await businessUserModel.find({intBusinessID:req.body.intBusinessID,intUserID:req.body.intUserID}).exec();	
			
		if(assetUser.length>0  ){
			if(assetUser[0]._id!=req.params.Id){
				res.status(400).json({ msg: "A similar record already exists", data: null});
				return;
			}
			}

			businessUserModel.findByIdAndUpdate(req.params.Id,data, function(err, movieInfo){

			if(err)
				res.status(400).json({ msg: "Save failed!" });
			else {
				res.status(200).json({ msg: "Saved successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		businessUserModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: async function(req, res, next) {
	//The record with the given Asset and User already exists.
	let businessUser=await businessUserModel.find({intBusinessID:req.body.intBusinessID,intUserID:req.body.intUserID}).exec();	
	if(businessUser.length>0){
		res.status(400).json({ msg: "A similar record already exists", data: null});
		return;
	}
	// console.log(assetUser,'assetUser');
	var data={};
		data.intUserID=req.body.intUserID;
		data.intBusinessID=req.body.intBusinessID;
		businessUserModel.create(data, function (err, result) {
				 if (err) {
					res.status(400).json({ msg: "Save failed", data: null});
				  }				  
				  else
				 	 res.status(200).json({msg: "Saved successfully!", data: {id:result._id}});
				  
				});
	},
	

}					