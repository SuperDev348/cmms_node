

const scheduledmaintenanceModel=require('../models/scheduledmaintenance');
module.exports = {
	getById: async function(req, res, next) {				
			
		scheduledmaintenanceModel.findById(req.params.Id)
		// ..and populate all of the notes associated with it
		// .populate("intSiteID")
		.populate("intAssignedToUserID")
		.populate("intProjectID")
		.populate("intAccountID")
		.populate("intChargeDepartmentID")
		.then(function(data) {		
		  // If we were able to successfully find an Product with the given id, send it back to the client
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
		  // If an error occurred, send it to the client
		  res.status(500).json({ msg: "Internal Server error" });
		});	

	},

	getAll: function(req, res, next) {

		scheduledmaintenanceModel.find({})
		// ..and populate all of the notes associated with it
		.populate("intSiteID")
		.populate("intAssignedToUserID")		
		.populate("intAssignedToUserID")
		.then(function(data) {		
		  // If we were able to successfully find an Product with the given id, send it back to the client
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
		  // If an error occurred, send it to the client
		  res.status(500).json({ msg: "Internal Server error" });
		});		

	},

	updateById: function(req, res, next) {
		var data={};
		data.intPriorityID=req.body.intPriorityID;
		data.intSiteID=req.body.intSiteID;
		data.intStartAsWorkOrderStatusID=req.body.intStartAsWorkOrderStatusID;
		data.intScheduledMaintenanceStatusID=req.body.intScheduledMaintenanceStatusID;
		data.intSuggestedCompletion=req.body.intSuggestedCompletion;
		data.strCode=req.body.strCode;
		data.intProjectID=req.body.intProjectID;
		data.strCompletionNotes=req.body.strCompletionNotes;
		data.intMaintenanceTypeID=req.body.intMaintenanceTypeID;
		data.intRequestorUserID=req.body.intRequestorUserID==undefined?null:req.body.intRequestorUserID;
		data.strDescription=req.body.strDescription;
		data.intAssignedToUserID=req.body.intAssignedToUserID==undefined?null:req.body.intAssignedToUserID;
		data.intAccountID=req.body.intAccountID;
		data.intChargeDepartmentID=req.body.intChargeDepartmentID;
		data.strWorkInstruction=req.body.strWorkInstruction;
		data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;

		data.strAssets=req.body.strAssets==null?"":req.body.strAssets;
		data.strAssetIds=req.body.strAssetIds==null?"":req.body.strAssetIds;
		data.strAssignedUser=req.body.strAssignedUser;
		data.intEstimatedHour=req.body.intEstimatedHour;
		// if(req.body.intAssetParentID==req.params.assetId){
		// 	res.status(400).json({ msg: "Asset cannot be 'a part of' or 'located at' itself" });
		// 	return
		// }
		   
		scheduledmaintenanceModel.findByIdAndUpdate(req.params.Id,data, function(err, movieInfo){
			if(err){
				console.log(err);
				res.status(400).json({ msg: "Failed!" });
			}
				
			else {
				res.status(200).json({ msg: "Saved successfully!", data:null});
			}
		});
	},

	deleteById: async function(req, res, next) {
		
		// let finds=	await assetModel.find({ intAssetParentID: req.params.assetId }).exec();	
		// if(finds.length>0){
		// 	res.status(400).json({ msg: "This Asset could not be deleted because there are Assets/Supplies related to it." });
		// }
		// else{
		await	scheduledmaintenanceModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
				if(err)
					res.status(400).json({ msg: "Delete failed!" });
				else {
					res.status(200).json({ msg: "Deleted successfully!", data:null});
				}
			});
		// }
	

	
	},

	create: async function(req, res, next) {
		
		var data={};
		data.intPriorityID=req.body.intPriorityID;
		data.intSiteID=req.body.intSiteID;
		data.intStartAsWorkOrderStatusID=req.body.intStartAsWorkOrderStatusID;
		data.intScheduledMaintenanceStatusID=req.body.intScheduledMaintenanceStatusID;
		data.intSuggestedCompletion=req.body.intSuggestedCompletion;
		data.strCode=req.body.strCode;
		data.intProjectID=req.body.intProjectID;
		data.strCompletionNotes=req.body.strCompletionNotes;
		data.intMaintenanceTypeID=req.body.intMaintenanceTypeID;
		data.intRequestorUserID=req.body.intRequestorUserID;
		data.strDescription=req.body.strDescription;
		data.intAccountID=req.body.intAccountID;
		data.intChargeDepartmentID=req.body.intChargeDepartmentID;
		data.strWorkInstruction=req.body.strWorkInstruction;
		data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;
		data.strAssets=req.body.strAssets;
		data.strAssetIds=req.body.strAssetIds;
		data.strAssignedUser=req.body.strAssignedUser;
		data.intEstimatedHour=req.body.intEstimatedHour;
		// data.bolCanFireSMWithOpenWO=req.body.bolCanFireSMWithOpenWO;
		// data.bolWORequiresSignature=req.body.bolWORequiresSignature;
	
	await	scheduledmaintenanceModel.create(data, function (err, result) {

				  if (err) {					
					res.status(400).json({ msg: "Creat failed", data: null});
				  }				  
				  else{
					  var update_sm={};
					  update_sm.strCode="SM"+result._id;					
					scheduledmaintenanceModel.findByIdAndUpdate(result._id,update_sm, function(err, update){
							//console.log(update);
						res.status(200).json({msg: "Saved successfully!", data: {id:result._id,strCode:update_sm.strCode}});
					})
				  }
				 	 
				  
				});
	},
	

}					