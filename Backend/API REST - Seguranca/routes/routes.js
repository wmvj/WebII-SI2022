const express = require('express')
const router = express.Router()
const bodyParser = require('body-parser')
const controller = require('../controllers/index')
const session = require('express-session')
const sessionStorage = require('../util/sessionStorage')
const passport = require('passport')

router.use(session({
    secret: 'webII', // previne de ataques de sessao
    resave: false, // indica se a sessao deve ser salva de volta no armazenamento mesmo n sendo modificada
    saveUninitialized: false, // indica se a sessao não inicializada deve ser salva no armazenamento
    store: sessionStorage // armazena a sessao na base de dados do mongoDB
  }))

router.use(bodyParser.urlencoded({ extended: true }))

router.use(passport.initialize())
router.use(passport.session())
require('../passport-config')

router.get('/', controller.showIndex)
router.post('/', controller.login)
router.get('/signup', controller.showPageSignUp)
router.post('/signup', controller.signup)
router.get('/members', controller.checkAuth, controller.showMembersPage)
router.get('/logout', controller.logout)
// roteamento com github
router.get('/auth/github',
  passport.authenticate('github', { scope: [ 'user:email' ] }));
router.get('/auth/github/callback',
  passport.authenticate('github', { failureRedirect: '/' }),
  (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/members');
  });
router.use(controller.get404Page)

module.exports = router
