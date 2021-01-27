
const workordertaskModel = require('../models/workordertask');					

module.exports = {
	getById: function(req, res, next) {			
		workordertaskModel.findById(req.params.Id)	
		.populate("intAssetID")
		.populate("intAssignedToUserID")	
		.populate("intCompletedByUserID")	
		.then(function(data) {		
		  res.status(200).json({msg: "Found!", data: data});	
		})
		.catch(function(err) {
		  res.status(500).json({ msg: "Internal Server error" });
		});		
	},

	getAll: function(req, res, next) {		
		workordertaskModel.find({intWorkOrderID:req.params.Id})	
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
		data.intWorkOrderID=req.body.intWorkOrderID;
		data.intTaskType=req.body.intTaskType;
		data.strResult=req.body.strResult;
		data.intAssetID=req.body.intAssetID;
		data.intOrder=req.body.intOrder;
		data.dtmStartDate=req.body.dtmStartDate;
		data.dtmDateCompleted=req.body.dtmDateCompleted;
		data.intCompletedByUserID=req.body.intCompletedByUserID;
		data.intAssignedToUserID=req.body.intAssignedToUserID;
		data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;
		data.dblTimeSpentHours=req.body.dblTimeSpentHours;
		data.intMeterReadingUnitID=req.body.intMeterReadingUnitID;
		data.strDescription=req.body.strDescription;
		data.strTaskNotesCompletion=req.body.strTaskNotesCompletion;
		data.intTaskGroupControlID=req.body.intTaskGroupControlID;
		data.intParentWorkOrderTaskID=req.body.intParentWorkOrderTaskID;

		workordertaskModel.findByIdAndUpdate(req.params.Id,data, function(err, info){

			if(err)
				res.status(400).json({ msg: "Update failed!" });
			else {
				res.status(200).json({ msg: "Updated successfully!", data:null});
			}
		});
	},

	deleteById: async function(req, res, next) {

    await workordertaskModel.deleteMany({ intParentWorkOrderTaskID: req.params.Id }).exec();

	await	workordertaskModel.findByIdAndRemove(req.params.Id, function(err, movieInfo){
			if(err)
				res.status(400).json({ msg: "Delete failed!" });
			else {
				res.status(200).json({ msg: "Deleted successfully!"});
			}
		});
	},

	create: async function(req, res, next) {
	
		console.log(req.body);
		if(req.body.intAssetID==""){	
		var data={};
		data.intWorkOrderID=req.body.intWorkOrderID;
		data.intTaskType=req.body.intTaskType;
		data.strResult=req.body.strResult;
		data.intAssetID=req.body.intAssetID;
		data.intOrder=req.body.intOrder;
		data.dtmStartDate=req.body.dtmStartDate;
		data.dtmDateCompleted=req.body.dtmDateCompleted;
		data.intCompletedByUserID=req.body.intCompletedByUserID;
		data.intAssignedToUserID=req.body.intAssignedToUserID;
		data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;
		data.dblTimeSpentHours=req.body.dblTimeSpentHours;
		data.intMeterReadingUnitID=req.body.intMeterReadingUnitID;
		data.strDescription=req.body.strDescription;
		data.strTaskNotesCompletion=req.body.strTaskNotesCompletion;
		data.intTaskGroupControlID=req.body.intTaskGroupControlID;
		data.intParentWorkOrderTaskID=req.body.intParentWorkOrderTaskID;
	
			 await	workordertaskModel.create(data, function (err, result) {
				  if (err) {
					res.status(400).json({ msg: "Creat failed", data: null});
				  }				  
				  else
				 	 res.status(200).json({msg: "Created successfully!", data: {id:result._id}});
				  
				});
		}
		else{
			var temp=req.body.intAssetID.toString();
		
			temp=temp.split(",");
			for(var i=0;i<temp.length;i++){
				var data={};
				data.intWorkOrderID=req.body.intWorkOrderID;
				data.intTaskType=req.body.intTaskType;
				data.strResult=req.body.strResult;
				data.intAssetID=temp[i];
				data.intOrder=req.body.intOrder;
				data.dtmStartDate=req.body.dtmStartDate;
				data.dtmDateCompleted=req.body.dtmDateCompleted;
				data.intCompletedByUserID=req.body.intCompletedByUserID;
				data.intAssignedToUserID=req.body.intAssignedToUserID;
				data.dblTimeEstimatedHours=req.body.dblTimeEstimatedHours;
				data.dblTimeSpentHours=req.body.dblTimeSpentHours;
				data.intMeterReadingUnitID=req.body.intMeterReadingUnitID;
				data.strDescription=req.body.strDescription;
				data.strTaskNotesCompletion=req.body.strTaskNotesCompletion;
				data.intTaskGroupControlID=req.body.intTaskGroupControlID;
				data.intParentWorkOrderTaskID=req.body.intParentWorkOrderTaskID;
				await	workordertaskModel.create(data, function (err, result) {
				});

			}
			res.status(200).json({msg: "Saved successfully!"});	
		}
	},
	

}					