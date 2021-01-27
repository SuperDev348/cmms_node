const mongoose = require("mongoose");
const unique = require("mongoose-unique-validator");
const autoIncrement = require('mongoose-auto-increment');
autoIncrement.initialize(mongoose.connection);
const Schema = mongoose.Schema;

const ProjectSchema = new Schema({
  strName: {
    type: String,
    unique: true,
  },
  strDescription: {
    type: String,
  },
  dtProjectStart: {
    type: Date,
  },
  dtProjectEnd: {
    type: Date,
  },
  actualStart: {
    type: Date,
  },
  actualEnd: {
    type: Date,
  },
});
ProjectSchema.plugin(autoIncrement.plugin, 'Project');
ProjectSchema.plugin(unique, { message: "That name is already taken." });
module.exports = mongoose.model("Project", ProjectSchema);
