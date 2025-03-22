const { Schema, model } = require("mongoose");

const blogSchema = new Schema({
    coverImageURL: {
        type: String,
        required: false,
    },
    title: {
        type: String,
        required: true,
    },
    body: {
        type: String,
        required: true,
    },
    
    createdBy: {
        type: Schema.Types.ObjectId,
        ref: "user",
    }

},
{timestamps: true});

const Blog = model('blog',blogSchema);

module.exports = Blog;