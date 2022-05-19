const router = require('express').Router();

const homeRoutes = require('./home-routes.js'); // Setup a front page

router.use('/', homeRoutes); // Add front page as static and setup routes for it

module.exports = router;
