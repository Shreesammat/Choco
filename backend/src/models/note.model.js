import mongoose, { Schema } from "mongoose";

const noteSchema = new Schema(
    {
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true
        },
        referenceUrl: {
            type: [String],
            required: true,
            default: []
        },
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        isFavorite: {
            type: Boolean,
            required: true,
            default: false
        },
        colorType: {
            type: Number,
            enum: [1, 2, 3, 4, 5],
            required: true,
        }
    }, {
        timestamps: true
    }
)