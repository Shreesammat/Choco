import express from 'express';
import { verifyJWT } from "../middlewares/auth.middleware.js";
import {
    createNote,
    getNotes,
    getNoteById,
    updateNote,
    deleteNote
} from '../controllers/note.controller.js';

const router = express.Router();

router.post('/notes',verifyJWT,createNote);

router.get('/notes',verifyJWT,getNotes);

router.get('/notes/:id',verifyJWT, getNoteById);

router.put('/notes/:id',verifyJWT, updateNote);

router.delete('/notes/:id',verifyJWT, deleteNote);

export default router;