const { Post } = require('../models');

const postdata = [
  {
    title: 'Ride on Time - Tatsuro Yamashita',
    user_id: 1,
    post_text:'Released September 19th, 1980',
  },
  {
    title: 'For You - Tatsuro Yamashita',
    user_id: 2,
    post_text: 'Released January 21, 1982',
  },
  {
    title: 'Big Wave - Tatsuro Yamashita',
    user_id: 3,
    post_text: 'Released June 20, 1984',
  },
  {
    title: 'Timely!! - Anri',
    user_id: 4,
    post_text: 'Released December 5, 1983',
  },
  {
    title: 'Seychelles - Masayoshi Takanaka',
    user_id: 5,
    post_text: 'Released July 1, 1976',
  },
  {
    title: 'Brasilian Skies - Masayoshi Takanaka',
    user_id: 6,
    post_text:'July 21, 1978',
  },
  {
    title: 'Sunshower - Taeko Ohnuki',
    user_id: 6,
    post_text:'Released May 13, 1977',
  },
  {
    title: 'Mignonne - Taeko Ohnuki',
    user_id: 4,
    post_text:'Released Semptember 21, 1978',
  },
  {
    title: 'midnight cruisin - Kingo Hamada',
    user_id: 5,
    post_text:'Released July 7, 1982',
  },
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;