import { createFolder, deleteFolder, updateFolderName, getFoldersByUserId, getNotesInFolder } from "../controllers/folder.controller.js";
import express from 'express';
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post('/',verifyJWT,createFolder);
router.delete('/:id',verifyJWT,deleteFolder);
router.put('/:id',verifyJWT,updateFolderName);
router.get('/user/',verifyJWT,getFoldersByUserId);
router.get('/:folderId/notes',verifyJWT,getNotesInFolder);

export default router