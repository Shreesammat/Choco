import { createFolder, deleteFolder, updateFolderName, getFoldersByUserId, getNotesInFolder } from "../controllers/folder.controller.js";
import express from 'express';
import { verifyJWT } from "../middlewares/auth.middleware.js";

const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Folders
 *   description: API endpoints for managing folders
 */

/**
 * @swagger
 * /folders/:
 *   post:
 *     summary: Create a new folder
 *     tags: [Folders]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: Name of the folder
 *     responses:
 *       201:
 *         description: Folder created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Folder'
 *       400:
 *         description: Missing required fields
 */
router.post('/', verifyJWT, createFolder);

/**
 * @swagger
 * /folders/{id}:
 *   delete:
 *     summary: Delete a folder
 *     tags: [Folders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the folder to delete
 *     responses:
 *       200:
 *         description: Folder deleted successfully
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Folder not found
 */
router.delete('/:id', verifyJWT, deleteFolder);

/**
 * @swagger
 * /folders/{id}:
 *   put:
 *     summary: Update folder name
 *     tags: [Folders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the folder to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *             properties:
 *               name:
 *                 type: string
 *                 description: New name for the folder
 *     responses:
 *       200:
 *         description: Folder name updated successfully
 *       400:
 *         description: Folder name is required
 *       404:
 *         description: Folder not found
 */
router.put('/:id', verifyJWT, updateFolderName);

/**
 * @swagger
 * /folders/user/:
 *   get:
 *     summary: Get all folders for the authenticated user
 *     tags: [Folders]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of folders
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Folder'
 */
router.get('/user/', verifyJWT, getFoldersByUserId);

/**
 * @swagger
 * /folders/{folderId}/notes:
 *   get:
 *     summary: Get all notes in a folder
 *     tags: [Folders]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: folderId
 *         required: true
 *         schema:
 *           type: string
 *         description: Folder ID to get notes from
 *     responses:
 *       200:
 *         description: List of notes in the folder
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Note'
 */
router.get('/:folderId/notes', verifyJWT, getNotesInFolder);

export default router;
