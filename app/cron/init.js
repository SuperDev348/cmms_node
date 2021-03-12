var schedule = require('node-schedule');
const SchedulTriggerModel = require('../api/models/scheduletrigger');	
const workOrderModel = require('../api/models/workorder');
// const moment = require('moment');
// const request = require('request-promise');

const init = async () => {

  console.log('this is cron');
  var j = schedule.scheduleJob(' */30 * * * *', async function(){
    console.log('The answer to life, the universe, and everything!');
  // await  SchedulTriggerModel.find({}, function(err, result){
    await SchedulTriggerModel.find({})
    .populate("intScheduledMaintenanceID")
    .then(function(result){
      var currentTime=new Date();
      console.log(currentTime,'currentTime');
      var upperTime=new Date();
      upperTime.setTime(currentTime.getTime() + (30 * 60 * 1000));     
     
      for(var i=0;i<result.length;i++){        
        console.log(result[i].intScheduledMaintenanceID.intScheduledMaintenanceStatusID,'this is status');
        if(result[i].intScheduledMaintenanceID.intScheduledMaintenanceStatusID!=1)
          continue;
          console.log(result[i]);
        var triggers=result[i].strthreshold;     
       triggers=triggers.split(",");
        for (var k=0;k<triggers.length;k++){           
          var triggerTime=new Date(triggers[k]);          
          if(currentTime<triggerTime && triggerTime<upperTime){
            console.log('triggered');
            // start section      
            var data = {
              intPriorityID: result[i].intScheduledMaintenanceID.intPriorityID,
              intWorkOrderStatusID: 4,         
              intSiteID: 1,
              intRequestedByUserID: result[i].intScheduledMaintenanceID.intRequestedByUserID,             
              strDescription: result[i].intScheduledMaintenanceID.strDescription,             
              strCode: result[i].intScheduledMaintenanceID.strCode,
              strCompletionNotes: result[i].intScheduledMaintenanceID.strCompletionNotes,
              intMaintenanceTypeID: result[i].intScheduledMaintenanceID.intMaintenanceTypeID,              
              strAssetIds:result[i].intScheduledMaintenanceID.strAssetIds,
              intProjectId:result[i].intScheduledMaintenanceID.intProjectId,
              // intAssignedUserId:intAssignedUserId,
              strAssets:result[i].intScheduledMaintenanceID.strAssets
            };           
		        workOrderModel.create(data, function (err, result) {             
              var workorder={};
              workorder.strCode="WO# "+result._id;
              workOrderModel.findByIdAndUpdate(result._id,workorder, function(err, movieInfo){
                    console.log('created')
              });

            });
            // end section 
          }
        }
     
      }

		});
   
  });
// j.cancel();

}
module.exports = init;