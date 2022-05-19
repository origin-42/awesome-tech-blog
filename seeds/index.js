const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedProjects = require('./projectData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedUsers();

  await seedProjects();

  process.exit(0);
};

seedAll();
