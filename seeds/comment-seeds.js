const { Comment } = require('../models');

const commentData = [
    {
        user_id: 1,
        post_id: 1,
        comment_text: "Truly I agree"
    },
    {
        user_id: 2,
        post_id: 2,
        comment_text: "It couldn't be better said"
    },
]

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;