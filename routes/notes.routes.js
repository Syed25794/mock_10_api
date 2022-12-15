const Router = require("express");
const { saveNotes, getAllBookmarks, getAllNotes, deleteNotes, changeBookmark } = require("../controllers/notes.controlles");

const notesRouters = Router();


notesRouters.post("/create",saveNotes);

notesRouters.get("/bookmarks",getAllBookmarks);

notesRouters.get("/all",getAllNotes);

notesRouters.delete("/delete/:_id",deleteNotes);

notesRouters.patch("/changeBookmark/:_id",changeBookmark);


module.exports = notesRouters;