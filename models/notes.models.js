const mongoose = require("mongoose");

const notesSchema = new mongoose.Schema({
  "Title": {type: String, required: true},
  "Quantity": {type: Number, required: true},
  "Priority": {type: String, required: true},
  "Date_timestamp": {type: String, required: true},
  "Description": {type: String, required: true},
  "Bookmark" : {type: Boolean, default : false }
});

const Notes = mongoose.model("note",notesSchema);

module.exports=Notes;