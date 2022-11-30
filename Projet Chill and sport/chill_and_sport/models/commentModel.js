import { Schema, model, models } from 'mongoose';

const commentSchema = new Schema({

    title: {
        type: String,
        required: true
    },

    content: {
        type: String,
        required: true
    },

    user_id: {
        type: String,
        required: true
    },

    activity_id: {
        type: String,
        required: true
    },

    author: {
        type: String,
        required: true
    },

    created_at: Date
});

const Comment = models.Comment || model('Comment', commentSchema);

export default Comment;

