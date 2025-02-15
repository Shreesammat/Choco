import Note from '../models/note.model.js';

export const createNote = async (req, res) => {
    try {
        const { userId, referenceUrl, title, content, isFavorite, colorType } = req.body;

        if (!userId || !title || !content || !colorType) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newNote = new Note({
            userId,
            referenceUrl: referenceUrl || [],
            title,
            content,
            isFavorite: isFavorite || false,
            colorType
        });

        await newNote.save();

        res.status(201).json(newNote);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const getNotes = async (req, res) => {
    try {
        const notes = await Note.find();
        res.status(200).json(notes);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};


export const getNoteById = async (req, res) => {
    try {
        const note = await Note.findById(req.params.id);

        if (!note) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(note);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};


export const updateNote = async (req, res) => {
    try {
        const { userId, referenceUrl, title, content, isFavorite, colorType } = req.body;

        if (!userId || !title || !content || !colorType) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const updatedNote = await Note.findByIdAndUpdate(
            req.params.id,
            {
                userId,
                referenceUrl: referenceUrl || [],
                title,
                content,
                isFavorite: isFavorite || false,
                colorType
            },
            { new: true } 
        );

        if (!updatedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json(updatedNote);
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};

export const deleteNote = async (req, res) => {
    try {
        const deletedNote = await Note.findByIdAndDelete(req.params.id);

        if (!deletedNote) {
            return res.status(404).json({ message: 'Note not found' });
        }

        res.status(200).json({ message: 'Note deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Something went wrong', error: error.message });
    }
};