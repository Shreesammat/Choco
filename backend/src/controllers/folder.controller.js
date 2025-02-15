import Folder from '../models/folder.model.js';
import Note from '../models/note.model.js'; 
import { ApiError } from '../utils/ApiError.js';
import { ApiResponse } from '../utils/ApiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';

export const createFolder = asyncHandler(async(req, res) => {
    const userId = req.user.id;
        const { name } = req.body;

        if (!userId || !name) {
            return res.status(400).json({ message: 'Missing required fields' });
        }

        const newFolder = new Folder({ userId, name });
        await newFolder.save();
        
        res.status(201).json(newFolder);
    }
)


export const deleteFolder = asyncHandler( async (req, res) => {
    const userId = req.user.id;
        const { id } = req.params;
        
        const toDeleteFolder = await Folder.findById(id);

        if (!toDeleteFolder) {
            throw new ApiError(404, "Folder not found!")
        }

        if(toDeleteFolder.userId.toString() !== userId) {
            throw new ApiError(403, "Unauthorized Access!")
        }

        await Folder.findByIdAndDelete(id);

        res.status(200).json(new ApiResponse(200, "Folder deleted successfully"));
    }
)

export const updateFolderName = asyncHandler( async (req, res) => {
    const { id } = req.params;
        const { name } = req.body;
        
        if (!name) {
            return res.status(400).json({ message: 'Folder name is required' });
        }

        const updatedFolder = await Folder.findByIdAndUpdate(
            id,
            { name },
            { new: true } 
        );

        if (!updatedFolder) {
            return res.status(404).json({ message: 'Folder not found' });
        }

        
        res.status(200).json(updatedFolder);
    }
)

export const getFoldersByUserId = asyncHandler(async (req, res) => {
    const userId = req.user.id;
    
    const folders = await Folder.find({userId: userId });
    
    res.status(200).json(folders);
})


export const getNotesInFolder = asyncHandler(async (req, res) => {
    const { folderId } = req.params;
    const notes = await Note.find({ folderId  });
    const folderName = await Folder.findById(folderId);
    res.status(200).json({notes: notes || [], folderName});
})
