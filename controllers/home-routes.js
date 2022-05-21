const router = require('express').Router();
const { Projects, Users, Posts } = require('../models');

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
        const projects = projectsData.map((project) => project.get({ plain: true }));

        res.status(200).render('main', { projects, loggedIn: req.session.loggedIn });

    } catch (err) {
        console.log(err)
    }
})

// If a post is clicked, I'm routed to see that post and its comments
router.get('/projects/:id', async (req, res) => {

  try {

    const projectsData = await Projects.findByPk(req.params.id, {
      include: [
        {
          model: Users,
          attributes: [
            'id',
            'username',
          ],
        },
        {
          model: Posts,
          attributes: [
            'id',
            'comment',
            "projects_id",
            "user_id",
            "createdAt",
          ],
          include: [{
            model: Users,
            attributes: [
              "username",
            ]
          }]
        },
      ],
    });
    const project = projectsData.get({ plain: true })

    res.status(200).render('projects', { project, loggedIn: req.session.loggedIn });

} catch (err) {
    console.log(err)
}

})

// hitting login page returns to home page or login depending on signin status
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;