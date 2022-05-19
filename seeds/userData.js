const { Users } = require('../models');

const galleryData = [
    {
      "name": "Sal",
      "password": "password12345"
    },
    {
      "name": "Lernantino",
      "password": "password12345"
    },
    {
      "name": "Amiko",
      "password": "password12345"
    },
    {
      "name": "Jordan",
      "password": "password12345"
    },
    {
      "name": "Blake",
      "password": "password12345"
    }
];

const seedUsers = () => Users.bulkCreate(galleryData);

module.exports = seedUsers;