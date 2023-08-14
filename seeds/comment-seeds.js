const { Comment } = require('../models');

const commentdata = [
  {
    comment_text: 'Wow, this product turned my pet rock into a rocket scientist!',
    user_id: 3,
    post_id: 1,
  },
  {
    comment_text: 'I drank this coffee and now I can communicate with squirrels.',
    user_id: 2,
    post_id: 4,
  },
  {
    comment_text: 'Your writing advice is invaluable to someone like me whos just starting out.',
    user_id: 3,
    post_id: 5,
  },
  {
    comment_text: 'I really enjoyed your post!',
    user_id: 5,
    post_id: 5,
  },
  {
    comment_text: 'This article opened up a whole new perspective for me.',
    user_id: 4,
    post_id: 5,
  },
  {
    comment_text: 'The way you describe natures beauty is simply poetic.',
    user_id: 1,
    post_id: 5,
  },
];

const seedComments = () => Comment.bulkCreate(commentdata);

module.exports = seedComments;