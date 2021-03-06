const express = require('express')
const router = express.Router()
const db = require('../../database/conn')
const Authentication = require('../../middleware/auth-jwt')

router.get('/admin', Authentication.Token, (req, res) => {
    res.json({
        name : 'Bagas Tri Wibowo (Admin)'
    })
})

router.post('/admin', async (req, res) => {
    try {
        const hashedPassword = await bcrypt.hash(req.body.password, 10)
        var adminData = {
            password: hashedPassword,
            email: req.body.email,
            id_Mahasiswa: req.body.nim,
            id_Acara: req.body.id_Acara,
            id_Organisasi: req.body.id_Organisasi
        }
        let quaryString = 'INSERT INTO data_admin SET ?'
        //console.log(adminData)
        db.query(quaryString, [adminData], (err, result) => {
            if (err) {
                res.json({status: err})
            } else {
                res.json({rowAffected: result.rowAffected, msg: 'post success'})
            }
        })
    } catch {
        res.status(500).send()
    }
})

module.exports = router