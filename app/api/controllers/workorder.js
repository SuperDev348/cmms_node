
const workOrderModel = require('../models/workorder');
const assetModel = require('../models/assets');	
const projectModel=require('../models/project');
const userModel=require('../models/users');
module.exports = {
	getById: async function(req, res, next) {
		await workOrderModel.findById(req.params.Id, async function(err, workorder){
			if (err) {
				res.status(400).json({ msg: "Not  found" });
			} else {
				//  let workOrderStatus=await workOrderStatusModel.findById(workorder.intWorkOrderStatusID).exec();
				// let Asset=await assetModel.findById(workorder.strAssetIds).exec();
				let project=await projectModel.findById(workorder.intProjectId).exec();
				let completedUser=await userModel.findById(workorder.intCompletedByUserID==""?null:workorder.intCompletedByUserID).exec();
				let assignedUser=await userModel.findById(workorder.intAssignedUserId==""?null:workorder.intAssignedUserId).exec();
				let result={};
				 result.workorder=workorder==null?{}:workorder;	
				  result.asset={};
				 result.project=project==null?{}:project;
				 result.completedUser=completedUser==null?{}:completedUser;
				 result.assignedUser=assignedUser==null?{}:assignedUser;
				 res.status(200).json({msg: "Found!", data: result});
			}
		});
	},

	getAll: function(req, res, next) {
		workOrderModel.find({})
		// ..and populate all of the notes associated with it
		// .populate("strAssetIds")
		.populate("intCompletedByUserID")
		.populate("intAssignedUserId")
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
		var workorder={};
		if (req.body.intPriorityID !== undefined)
			workorder.intPriorityID=req.body.intPriorityID;
		if (req.body.intWorkOrderStatusID !== undefined)
			workorder.intWorkOrderStatusID=req.body.intWorkOrderStatusID;
		if (req.body.intSiteID !== undefined)
			workorder.intSiteID=req.body.intSiteID;
		if (req.body.intRequestedByUserID !== undefined)
			workorder.intRequestedByUserID=req.body.intRequestedByUserID;
		if (req.body.strEmailUserGuest !== undefined)
			workorder.strEmailUserGuest=req.body.strEmailUserGuest;
		// if (req.body.dtmDateCreated !== undefined)
			// workorder.dtmDateCreated=req.body.dtmDateCreated;
		if (req.body.dtmDateCompleted !== undefined)
			workorder.dtmDateCompleted=req.body.dtmDateCompleted;
		if (req.body.intCompletedByUserID !== undefined)
			workorder.intCompletedByUserID=req.body.intCompletedByUserID;
		if (req.body.strDescription !== undefined)
			workorder.strDescription=req.body.strDescription;
		if (req.body.intEstimatedHour !== undefined)
			workorder.intEstimatedHour=req.body.intEstimatedHour;
		if (req.body.intActualHour !== undefined)
			workorder.intActualHour=req.body.intActualHour;
		if (req.body.strNameUserGuest !== undefined)
			workorder.strNameUserGuest=req.body.strNameUserGuest;
		if (req.body.dtmSuggestedCompletionDate !== undefined)
			workorder.dtmSuggestedCompletionDate=req.body.dtmSuggestedCompletionDate;
		if (req.body.strPhoneUserGuest !== undefined)
			workorder.strPhoneUserGuest=req.body.strPhoneUserGuest;
		// if (req.body.strCode !== undefined)
			// workorder.strCode=req.body.strCode;
		if (req.body.strCompletionNotes !== undefined)
			workorder.strCompletionNotes=req.body.strCompletionNotes;
		if (req.body.intMaintenanceTypeID !== undefined)
			workorder.intMaintenanceTypeID	=req.body.intMaintenanceTypeID;
		if (req.body.dtmDateLastModified !== undefined)
			workorder.dtmDateLastModified	=req.body.dtmDateLastModified;
		if (req.body.strAdminNotes !== undefined)
			workorder.strAdminNotes	=req.body.strAdminNotes;
		if (req.body.intRCAActionID !== undefined)
			workorder.intRCAActionID	=req.body.intRCAActionID;
		if (req.body.intRCACauseID !== undefined)
			workorder.intRCACauseID	=req.body.intRCACauseID;
		if (req.body.intRCAProblemID !== undefined)
			workorder.intRCAProblemID	=req.body.intRCAProblemID;
		if (req.body.intProjectId !== undefined)
			workorder.intProjectId=req.body.intProjectId;
		if (req.body.strAssetIds !== undefined)
			workorder.strAssetIds=req.body.strAssetIds;
		if (req.body.strAssignedUsers !== undefined)
			workorder.strAssignedUsers=req.body.strAssignedUsers;
		if (req.body.intAssignedUserId !== undefined)
			workorder.intAssignedUserId=req.body.intAssignedUserId;
		if (req.body.dblTimeEstimatedHours !== undefined)
			workorder.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;
		if (req.body.dblTimeSpentHours !== undefined)
			workorder.dblTimeSpentHours=req.body.dblTimeSpentHours;
		if (req.body.strAssets !== undefined)
			workorder.strAssets=req.body.strAssets;
		if (req.body.dtmEstimatedStartDate != undefined)
			workorder.dtmEstimatedStartDate=req.body.dtmEstimatedStartDate;
			
		workOrderModel.findByIdAndUpdate(req.params.Id,workorder, function(err, movieInfo){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: function(req, res, next) {
		workOrderModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!", data:null});
			}
		});
	},

	create: function(req, res, next) {		
		var workorder={};
		if (req.body.intPriorityID !== undefined)
			workorder.intPriorityID=req.body.intPriorityID;
		if (req.body.intWorkOrderStatusID !== undefined)
			workorder.intWorkOrderStatusID=req.body.intWorkOrderStatusID;
		if (req.body.intSiteID !== undefined)
			workorder.intSiteID=req.body.intSiteID;
		if (req.body.intRequestedByUserID !== undefined)
			workorder.intRequestedByUserID=req.body.intRequestedByUserID;
		if (req.body.strEmailUserGuest !== undefined)
			workorder.strEmailUserGuest=req.body.strEmailUserGuest;
		// if (req.body.dtmDateCreated !== undefined)
		// 	workorder.dtmDateCreated=req.body.dtmDateCreated;
		if (req.body.dtmDateCompleted !== undefined)
			workorder.dtmDateCompleted=req.body.dtmDateCompleted;
		if (req.body.intCompletedByUserID !== undefined)
			workorder.intCompletedByUserID=req.body.intCompletedByUserID;
		if (req.body.strDescription !== undefined)
			workorder.strDescription=req.body.strDescription;
		if (req.body.intEstimatedHour !== undefined)
			workorder.intEstimatedHour=req.body.intEstimatedHour;
		if (req.body.intActualHour !== undefined)
			workorder.intActualHour=req.body.intActualHour;
		if (req.body.strNameUserGuest !== undefined)
			workorder.strNameUserGuest=req.body.strNameUserGuest;
		if (req.body.dtmSuggestedCompletionDate !== undefined)
			workorder.dtmSuggestedCompletionDate=req.body.dtmSuggestedCompletionDate;
		if (req.body.strPhoneUserGuest !== undefined)
			workorder.strPhoneUserGuest=req.body.strPhoneUserGuest;
		if (req.body.strCode !== undefined)
			workorder.strCode=req.body.strCode;
		if (req.body.strCompletionNotes !== undefined)
			workorder.strCompletionNotes=req.body.strCompletionNotes;
		if (req.body.intMaintenanceTypeID !== undefined)
			workorder.intMaintenanceTypeID	=req.body.intMaintenanceTypeID;
		if (req.body.dtmDateLastModified !== undefined)
			workorder.dtmDateLastModified	=req.body.dtmDateLastModified;
		if (req.body.strAdminNotes !== undefined)
			workorder.strAdminNotes	=req.body.strAdminNotes;
		if (req.body.intRCAActionID !== undefined)
			workorder.intRCAActionID	=req.body.intRCAActionID;
		if (req.body.intRCACauseID !== undefined)
			workorder.intRCACauseID	=req.body.intRCACauseID;
		if (req.body.intRCAProblemID !== undefined)
			workorder.intRCAProblemID	=req.body.intRCAProblemID;
		if (req.body.strAssignedUsers !== undefined)
			workorder.strAssignedUsers=req.body.strAssignedUsers;
		if (req.body.strAssetIds !== undefined)
			workorder.strAssetIds=req.body.strAssetIds==null?"":req.body.strAssetIds;
		if (req.body.intProjectId !== undefined)
			workorder.intProjectId=req.body.intProjectId;
		if (req.body.intAssignedUserId !== undefined)
			workorder.intAssignedUserId=req.body.intAssignedUserId;
		if (req.body.dblTimeEstimatedHours !== undefined)
			workorder.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;
		if (req.body.dblTimeSpentHours !== undefined)
			workorder.dblTimeSpentHours=req.body.dblTimeSpentHours;
		if (req.body.strAssets !== undefined)
			workorder.strAssets=req.body.strAssets==null?"":req.body.strAssets;
		if (req.body.dtmEstimatedStartDate != undefined)
			workorder.dtmEstimatedStartDate=req.body.dtmEstimatedStartDate;
		workOrderModel.create(workorder, function (err, result) {

				  if (err) {					
					if (err.errors) {	
						if (err.errors.intWorkOrderStatusID) {
							res.status(400).json({ msg: err.errors.intWorkOrderStatusID.message });
							return;
						  }
						else if (err.errors.intSiteID) {
								res.status(400).json({ msg: err.errors.intSiteID.message });
								return;
						}
					}
					console.log(err);
					res.status(400).json({ msg: "Saved failed", data: null});
				  }				  
				  else{
					workorder.strCode="WO# "+result._id;
					workOrderModel.findByIdAndUpdate(result._id,workorder, function(err, movieInfo){

						if(err)
							res.status(400).json({ msg: "Created failed!" });
						else {
							res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
						}
					});
				
				  }
				 	 
				  
				});
	},

}					