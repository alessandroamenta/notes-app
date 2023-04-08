import * as NotesController from "../controllers/notes"
import express from "express"

//we do this because we dont want to create a new app
const router = express.Router()

router.get("/", NotesController.getNotes);

router.get("/:noteId", NotesController.getNote)

router.post("/", NotesController.createNote);

router.patch("/:noteId", NotesController.updateNote)

router.delete("/:noteId", NotesController.deleteNote)

export default router
  