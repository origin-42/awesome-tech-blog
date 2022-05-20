const router = require('express').Router();
const { Projects, Users } = require('../models');

// Hitting home page renders current projects from database in order by post date DESC
router.get('/', async (req, res) => {
    try {

        const projectsData = await Projects.findAll({
            limit: 3, 
            order: [['updatedAt', 'DESC']],
            include: [
              {
                model: Users,
                attributes: ['username'],
              },
            ],
        });
        const projects = projectsData.map((project) => project.get({ plain: true }))

        res.status(200).render('main', { projects })

    } catch (err) {
        console.log(err)
    }
})

module.exports = router;