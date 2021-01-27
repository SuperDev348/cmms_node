
const userGroupModel = require('../models/users');
const userModel=require('../models/users');
module.exports = {
	getById: function(req, res, next) {	
		userGroupModel.findById(req.params.Id, function(err, data){
			if (err) {
				res.status(400).json({ msg: "Not found" });
			} else {
				res.status(200).json({msg: "Found!", data: data});
			}
		});
	},

	getAll: function(req, res, next) {
		userGroupModel.find({bolGroup:true}, function(err, data){
			if (err){
				res.status(500).json({ msg: "Internal Server error" });
			} else{				
				res.status(200).json({msg: "User Group list found!", data: data});							
			}

		});
	},

	updateById: async function(req, res, next) {
		var data={};
		data.strName=req.body.strName;	

	 await	userGroupModel.findByIdAndUpdate(req.params.Id,data, function(err, movieInfo){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: async function(req, res, next) {
		let users=await userModel.find({}).exec();		
		for(var i=0;i<users.length;i++){
			if(users[i].strGroupIds!=undefined){
			  var temp=users[i].strGroupIds;
			  temp=temp.split(",");
			  if(temp.indexOf(req.params.Id)!==-1){
				res.status(400).json({ msg: "You must remove the users form this User Group before deleting it" });
				return;
			  }        
			}
		  }
	
	await	userGroupModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!", data:null});
			}
		});
	},

	create: function(req, res, next) {		
		var usergroup={};
		usergroup.strFullName=req.body.strName;
		usergroup.bolGroup	=true;
		usergroup.password	="******";
		userGroupModel.create(usergroup, function (err, result) {
			console.log(err);
				  if (err) {
					if (err.errors) {
						if (err.errors.strFullName) {
						  res.status(400).json({ msg: err.errors.strFullName.message });
						  return;
						}
					}					
				  }				  
				  else
				 	 res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
				  
				});
	},

}					