const { Post } = require('../models');

const postData = [
    {
        title: "I am trying to be the best at what I do",
        post_content: "In order to do that, I ought to keep learning and getting better daily. It is not an easy task and I do not take this lightly.",
        user_id: 1
    },
    {
        title: "Studying tech in America is challenging, studies reveal",
        post_content: "What I would like to understand is how the economy affects the targets of students, and how the ecosytem fairs.",
        user_id: 2

    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;