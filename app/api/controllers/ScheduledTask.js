

const ScheduledTaskModel=require('../models/scheduledtask');
module.exports = {
	getById: async function(req, res, next) {				
			
		ScheduledTaskModel.findById(req.params.Id)
	
		.populate("intAssignedToUserID")
		.populate("intAssetID")	
		.then(function(data) {		
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
		  res.status(500).json({ msg: "Internal Server error" });
		});	

	},

	getAll: function(req, res, next) {

		ScheduledTaskModel.find({intScheduledMaintenanceID:req.params.Id})	
		.populate("intAssetID")
		.populate("intAssignedToUserID")
		.then(function(data) {				
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {		
		  res.status(500).json({ msg: "Internal Server error" });
		});		

	},

	updateById: function(req, res, next) {
		var data={};
		data.intTaskType=req.body.intTaskType;
		data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;
		data.intAssetID=req.body.intAssetID;
		data.intAssignedToUserID=req.body.intAssignedToUserID;
		data.intMeterReadingUnitID=req.body.intMeterReadingUnitID;
		data.intOrder=req.body.intOrder;
		data.intParentScheduledTaskID=req.body.intParentScheduledTaskID;
		data.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
		data.strDescription=req.body.strDescription;
		
		ScheduledTaskModel.findByIdAndUpdate(req.params.Id,data, function(err, movieInfo){
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
		
		await	ScheduledTaskModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
				if(err)
					res.status(400).json({ msg: "Delete failed!" });
				else {
					res.status(200).json({ msg: "Deleted successfully!", data:null});
				}
			});
		// }
	

	
	},

	create: async function(req, res, next) {	
	
		if(req.body.intAssetID==""){	
			var data={};	
			data.intAssetID=req.body.intAssetID;
			data.intTaskType=req.body.intTaskType;
			data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;		
			data.intAssignedToUserID=req.body.intAssignedToUserID;
			data.intMeterReadingUnitID=req.body.intMeterReadingUnitID;
			data.intOrder=req.body.intOrder;
			data.intParentScheduledTaskID=req.body.intParentScheduledTaskID;
			data.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
			data.strDescription=req.body.strDescription;
			await	ScheduledTaskModel.create(data, function (err, result) {
				res.status(200).json({msg: "Saved successfully!", data: result});				 	 
				  
	  		 });
		}
		else{
				var temp=req.body.intAssetID.toString();
				var array_val=[];
				temp=temp.split(",");
				
				for(var i=0;i<temp.length;i++){
					var data={};
					data.intTaskType=req.body.intTaskType;
					data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;		
					data.intAssignedToUserID=req.body.intAssignedToUserID;
					data.intMeterReadingUnitID=req.body.intMeterReadingUnitID;
					//data.intOrder=req.body.intOrder;
					data.intAssetID=temp[i];
					data.intParentScheduledTaskID=req.body.intParentScheduledTaskID;
					data.intScheduledMaintenanceID=req.body.intScheduledMaintenanceID;
					data.strDescription=req.body.strDescription;
					
					await	ScheduledTaskModel.create(data, function (err, result) {
						//res.status(200).json({msg: "Saved successfully!", data: result});							  
				  });
				}
					
				res.status(200).json({msg: "Saved successfully!"});	
		 }
		

	

	},
	

}					