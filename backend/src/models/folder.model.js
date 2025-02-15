import mongoose, { Schema } from "mongoose";

const folderSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        name: {
            type: String,
            required: true
        }
    }, {
        timestamps: true
    }
)
const Folder = mongoose.model('Folder', folderSchema);
export default Folder;