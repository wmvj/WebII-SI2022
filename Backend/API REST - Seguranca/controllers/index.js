const User = require('../models/user')

exports.showIndex = (req, res, next) => {
    res.render('index')
}

exports.showPageSignUp = (req, res, next) => {
    res.render('signUp')
}

exports.showMembersPage = (req, res) => {
    res.render('members')
}

exports.get404Page = (req, res, next) => {
    res.status(404).render('404')
}

exports.signup = (req, res, next) => {
    const {username, email, password} = req.body
    console.log(username, email, password)
    const user = new User(username, email, password)
    try {
        user.save()
        res.redirect('/')
    } catch (error) {
        console.log(error)
        res.redirect('/signup')
    }
}