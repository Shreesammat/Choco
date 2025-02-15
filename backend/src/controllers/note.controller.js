import Note from '../models/note.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';

export const createNote = asyncHandler(async (req, res) => {
    const { referenceUrl, title, content, isFavorite, colorType } = req.body;
    const userId = req.user.id;
    if (!userId || !title || !content || !colorType) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const newNote = new Note({
        userId,
        referenceUrl: referenceUrl,
        title,
        content,
        isFavorite: isFavorite,
        colorType
    });

    await newNote.save();
    res.status(201).json(newNote);
});

export const getNotes = asyncHandler(async (req, res) => {
    const notes = await Note.find({ userId: req.user.id }); // Fixed filter issue
    res.status(200).json(notes);
});

export const getNoteById = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const note = await Note.findOne({_id:req.params.id, userId: userId});

    if (!note) {
        return res.status(404).json({ message: 'Note not found' });
    }

    res.status(200).json(note);
});

export const updateNote = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const {noteId, ...updatedFields } = req.body;

    if (!userId || !noteId) {
        return res.status(400).json({ message: 'Missing required fields' });
    }

    const updatedNotefield = {
        noteId,
        ...updatedFields
    }

    const updatedNote = await Note.findByIdAndUpdate(
        noteId,
        {$set: updatedNotefield},
        {new: true}
    )

    if (!updatedNote) {
        return res.status(404).json({ message: 'Note not found' });
    }

    res.status(201).json(updatedNote);
});

export const deleteNote = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    const note = await Note.findById(req.params.id);

    if(!note) {
        throw new ApiError(404, "Note not found!")
    }

    if(note.userId.toString() !== userId) {
        throw new ApiError(403, "Unauthorized Access!")
    }

    const deletedNote = await Note.findByIdAndDelete(req.params.id);
    if(!deletedNote) {
        throw new ApiError(400, "Failed to delete Note")
    }

    return res
    .status(200)
    .json(new ApiResponse(200, "Note deleted successfully"))
});