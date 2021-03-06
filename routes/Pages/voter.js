const express = require('express')
const router = express.Router()
const db = require('../../database/conn')

const initializePassport = require('../../controller/auth-admin-passport-config')

router.get('/', (req, res) => {
    res.render('login-pemilih')
})

router.get('/admin', (req, res) => {
    res.render('login-admin')
})

router.get('/superadmin', (req, res) => {
    res.render('login-super-admin')
})

module.exports = router