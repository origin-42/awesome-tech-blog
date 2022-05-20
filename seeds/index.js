const sequelize = require('../config/connection');

const seedUsers = require('./userData');
const seedProjects = require('./projectData');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("users")
  await seedUsers();
  console.log("projects")
  await seedProjects();

  process.exit(0);
};

seedAll();
