const router = require('express').Router();

const userRoutes = require('./User.js');
const postRoutes = require('./Post.js');
const commentRoutes = require('./comments');

router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;