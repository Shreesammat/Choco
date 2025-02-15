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

/**
 * @swagger
 * tags:
 *   name: Notes
 *   description: API endpoints for managing notes
 */

/**
 * @swagger
 * /notes:
 *   post:
 *     summary: Create a new note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - folderId
 *               - title
 *               - content
 *               - colorType
 *             properties:
 *               folderId:
 *                 type: string
 *                 description: ID of the folder where the note will be created
 *               referenceUrl:
 *                 type: string
 *                 description: Optional reference URL for the note
 *               title:
 *                 type: string
 *                 description: Title of the note
 *               content:
 *                 type: string
 *                 description: Content of the note
 *               isFavorite:
 *                 type: boolean
 *                 description: Mark note as favorite
 *               colorType:
 *                 type: string
 *                 description: Color theme of the note
 *     responses:
 *       201:
 *         description: Note created successfully
 *       400:
 *         description: Missing required fields
 */
router.post('/notes', verifyJWT, createNote);

/**
 * @swagger
 * /notes:
 *   get:
 *     summary: Get all notes in a folder
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               folderId:
 *                 type: string
 *                 description: ID of the folder to fetch notes from
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
router.get('/notes', verifyJWT, getNotes);

/**
 * @swagger
 * /notes/{id}:
 *   get:
 *     summary: Get a note by ID
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: Note ID to retrieve
 *     responses:
 *       200:
 *         description: Note retrieved successfully
 *       404:
 *         description: Note not found
 */
router.get('/notes/:id', verifyJWT, getNoteById);

/**
 * @swagger
 * /notes/{id}:
 *   put:
 *     summary: Update a note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the note to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 description: Updated title of the note
 *               content:
 *                 type: string
 *                 description: Updated content of the note
 *               isFavorite:
 *                 type: boolean
 *                 description: Mark note as favorite or not
 *               colorType:
 *                 type: string
 *                 description: Updated color theme of the note
 *     responses:
 *       200:
 *         description: Note updated successfully
 *       400:
 *         description: Missing required fields
 *       404:
 *         description: Note not found
 */
router.put('/notes/:id', verifyJWT, updateNote);

/**
 * @swagger
 * /notes/{id}:
 *   delete:
 *     summary: Delete a note
 *     tags: [Notes]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the note to delete
 *     responses:
 *       200:
 *         description: Note deleted successfully
 *       403:
 *         description: Unauthorized access
 *       404:
 *         description: Note not found
 */
router.delete('/notes/:id', verifyJWT, deleteNote);

export default router;
