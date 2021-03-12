const express = require('express');
const logger = require('morgan');
const cors = require('cors');
// const session = require('express-session')
const auth=require('./routes/auth');
const account = require('./routes/account');
const assets = require('./routes/assets') ;
const assetcategory = require('./routes/assetcategory');
const assetconsumingreference = require('./routes/assetconsumingreference');
const assetuser=require('./routes/assetuser');
const assetevent=require('./routes/assetevent');
const asseteventtype = require('./routes/asseteventtype');
const assetbusiness =require('./routes/assetbusiness');
const assetofflinetracker = require('./routes/assetofflinetracker');
const business =require('./routes/business');
const businessuser =require('./routes/businessuser');
const chargedepartment = require('./routes/chargedepartment');
const project = require('./routes/project');
const meterreadingunit=require('./routes/meterreadingunit');
const meterreading=require('./routes/meterreading');
const status = require('./routes/status');
const scheduledtask=require('./routes/scheduledtask');
const sheduledmaintenance=require('./routes/scheduledmaintenance');
const scheduletrigger=require('./routes/scheduletrigger');
const users = require('./routes/users');
const usergroup = require('./routes/usergroup');
const workorder = require('./routes/workorder');
const workorderasset = require('./routes/workorderasset');
const workorderbusiness = require('./routes/workorderbusiness');
const workordertask=require('./routes/workordertask');
const workorderstatus = require('./routes/workorderstatus');
const workorderuser = require('./routes/workorderuser');
const audit = require('./routes/audit');
const billingterm = require('./routes/billingterm');
const businessclassification = require('./routes/businessclassification');
const businessgroup = require('./routes/businessgroup');
const calendarevent = require('./routes/calendarevent');
const drill = require('./routes/drill');
const scheduleddrill = require('./routes/scheduleddrill');
const file = require('./routes/file');
const move = require('./routes/move');
const movestatus = require('./routes/movestatus');
const maintenancetype = require('./routes/maintenancetype');
const moveasset = require('./routes/moveasset');
const moveback = require('./routes/moveback');
const movebackasset = require('./routes/movebackasset');
const scheduledaudit = require('./routes/scheduledaudit');
const priority = require('./routes/priority');
const receipt = require('./routes/receipt');
const receiptlineitem = require('./routes/receiptlineitem');
const receiptstatus = require('./routes/receiptstatus');
const scheduledmaintenanceasset = require('./routes/scheduledmaintenanceasset');

const bodyParser = require('body-parser');
const mongoose = require('./config/database'); //database configuration
const { authenticate, authError } = require('./app/middleware');
const Config= require('./config/config');
const { port, secretKey } = Config;

const cronTask = require('./app/cron').init;

const app = express();

app.set('secretKey', secretKey); // jwt secret token

// connection to mongodb
mongoose.connection.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(logger('dev'));
// Set body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cors({ origin: '*' }));

app.get('/api', function(req, res){
res.json({"status" : "Server Running ...."});
});

// public route

app.use('/api/auth', auth);
// private route
//app.use('/api', [authenticate, authError]);
app.use('/api/users',[authenticate, authError], users);
app.use('/api/assets', [authenticate, authError], assets);
app.use('/api/workorder', [authenticate, authError],workorder)
app.use('/api/usergroup', usergroup)
app.use('/api/assetcategory', assetcategory);
app.use('/api/status', status);
app.use('/api/workorderstatus',workorderstatus);
app.use('/api/project',project);
app.use('/api/account',[authenticate, authError],account);
app.use('/api/chargedepartment',[authenticate, authError],chargedepartment);
app.use('/api/asseteventtype',[authenticate, authError],asseteventtype);
app.use('/api/meterreadingunit',[authenticate, authError],meterreadingunit);
app.use('/api/meterreading',[authenticate, authError],meterreading);
app.use('/api/assetuser',[authenticate, authError],assetuser);
app.use('/api/assetevent',[authenticate, authError],assetevent);
app.use('/api/business',[authenticate, authError],business);
app.use('/api/assetbusiness',[authenticate, authError],assetbusiness);
app.use('/api/businessuser',[authenticate, authError],businessuser);
app.use('/api/sheduledmaintenance',[authenticate, authError],sheduledmaintenance);
app.use('/api/scheduletrigger',[authenticate, authError],scheduletrigger);
app.use('/api/workordertask',[authenticate, authError],workordertask);
app.use('/api/scheduledtask',[authenticate, authError],scheduledtask);
app.use('/api/audit', [authenticate, authError], audit);
app.use('/api/assetofflinetracker', [authenticate, authError], assetofflinetracker);
app.use('/api/workorderasset', [authenticate, authError], workorderasset);
app.use('/api/workorderbusiness', [authenticate, authError], workorderbusiness);
app.use('/api/workorderuser', [authenticate, authError], workorderuser);
app.use('/api/assetconsumingreference', [authenticate, authError], assetconsumingreference);
app.use('/api/billingterm', [authenticate, authError], billingterm);
app.use('/api/businessclassification', [authenticate, authError], businessclassification);
app.use('/api/businessgroup', [authenticate, authError], businessgroup);
app.use('/api/calendarevent', [authenticate, authError], calendarevent);
app.use('/api/drill', [authenticate, authError], drill);
app.use('/api/scheduleddrill', [authenticate, authError], scheduleddrill);
app.use('/api/file', [authenticate, authError], file);
app.use('/api/move', [authenticate, authError], move);
app.use('/api/movestatus', [authenticate, authError], movestatus);
app.use('/api/maintenancetype', [authenticate, authError], maintenancetype);
app.use('/api/moveasset', [authenticate, authError], moveasset);
app.use('/api/moveback', [authenticate, authError], moveback);
app.use('/api/movebackasset', [authenticate, authError], movebackasset);
app.use('/api/scheduledaudit', [authenticate, authError], scheduledaudit);  
app.use('/api/priority', [authenticate, authError], priority);  
app.use('/api/receipt', [authenticate, authError], receipt);  
app.use('/api/receiptlineitem', [authenticate, authError], receiptlineitem);   
app.use('/api/receiptstatus', [authenticate, authError], receiptstatus);
app.use('/api/scheduledmaintenanceasset', [authenticate, authError], scheduledmaintenanceasset);
// app.use('./api/scheduleda', scheduledaudit);
// app.get('/favicon.ico', function(req, res) {     
//     res.sendStatus(204);
// });

// handle errors
app.use(function(err, req, res, next) {
	console.log(err);
	
  if(err.status === 404)
  	res.status(404).json({message: "Not found"});
  else	
    res.status(500).json({message: "Something looks wrong :( !!!"});

});

app.listen(port, function(){
	console.log('server listening on port ',port);
});
cronTask();