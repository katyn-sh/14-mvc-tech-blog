const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userdata = [
  {
    username: 'hellokitty',
    password: 'whitecat'
  },
  {
    username: 'keroppi',
    password: 'froggo'
  },
  {
    username: 'cinnamoroll',
    password: 'pupper'
  },
  {
    username: 'kuromi',
    password: 'kuromi'
  },
  {
    username: 'pompompurin',
    password: 'doggo'
  },
  {
    username: 'pochacco',
    password: 'doggo2'
  },
];

const seedUsers = () => User.bulkCreate(userdata, {individualHooks: true});

module.exports = seedUsers;