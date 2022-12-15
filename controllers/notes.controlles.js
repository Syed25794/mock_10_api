const Notes = require("../models/notes.models");

const saveNotes = async (req, res) => {
  try {
    const { Title, Quantity, Description, Priority } = req.body;
    const payload = {
      Title: Title,
      Quantity: Quantity,
      Date_timestamp: new Date(),
      Description: Description,
      Priority: Priority,
      Bookmark: false,
    };
    console.log(payload);
    console.log("________________________________________");
    let result = Notes.insertMany([payload]);
    console.log(result);
    res.send({ msg: "successfully created notes" });
  } catch (err) {
    res.send({ msg: "something went wrong" });
  }
};

const getAllBookmarks = async (req, res) => {
  try {
    let data = await Notes.find({ Bookmark: true });
    console.log(data);
    res.send({ data: data });
  } catch (error) {
    console.log(error);
    res.send({ msg: error });
  }
};

const getAllNotes = async (req, res) => {
  try {
    let data = await Notes.find();
    console.log(data);
    res.send({ data: data });
  } catch (error) {
    console.log(error);
    res.send({ msg: error });
  }
};

const deleteNotes = async (req, res) => {
  const { _id } = req.params;
  try {
    let result = await Notes.deleteOne({_id});
    res.send({"msg":"successfully deleted"});
  } catch (error) {
    res.send({"msg":"not deleted some error"});
  }
};

const changeBookmark = async (req, res) => {
  const { _id } = req.params;
  try {
    let result = await Notes.findOne({ _id });
    const flag = result.Bookmark;
    let result2 = await Notes.updateOne({_id},{Bookmark:!flag});
    let data = await Notes.findOne({_id});
    // console.log("new",data);
    res.send({"msg":"bookmark updated",data: data});
  } catch (error) {
    // console.log(error);
    res.send({"msg":"bookmark not updated some error"});
  }
};

module.exports = {
  saveNotes,
  getAllBookmarks,
  getAllNotes,
  deleteNotes,
  changeBookmark,
};
