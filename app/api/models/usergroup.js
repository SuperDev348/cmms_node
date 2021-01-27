const mongoose = require('mongoose');
const unique = require('mongoose-unique-validator');
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;
const UserGroupSchema = new Schema({
	strName: {
		type: String,
		unique: true,
	},	
	permission: {
		type: Array,
		default: [
		  {
			title: "Can See 'Settings' Top Menu",
			key: "0-0",			
			children: [
			  { title: "Can See 'Users' Menu Item", key: "0-0-0" ,checked:false},
			  { title: "Can See 'User Groups' Menu Item", key: "0-0-1",checked:false },
			],
		  },
		  {
			title: "Can See 'Help' Top Menu",
			key: "0-1",
			children: null,
			checked:false
		  },
		  {
			title: "Can See 'Dashboard' Top Menu",
			key: "0-2",

			children: [
			  { title: "  Can See 'Dashboard' Menu Item", key: "0-2-0",checked:false },
			  { title: "Can See 'User Groups' Menu Item", key: "0-2-1", checked:false},
			],
		  },
		],
	  },
	
	
	
});
UserGroupSchema.plugin(unique, { message: 'That {PATH} is already taken.' });
UserGroupSchema.plugin(autoIncrement.plugin, 'UserGroup');
module.exports = mongoose.model('UserGroup', UserGroupSchema)