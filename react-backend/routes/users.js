var express = require('express'),
  config = require('../dbFiles/dbConfig'),
  dbOperations = require('../dbFiles/dbOperations'),
  sql = require('mssql')
var router = express.Router();




router.post('/', async function (req, res) {
  let email = req.body.email
  let password = req.body.password
  if (email && password) {
    let pool = await sql.connect(config)
    let addedUser = pool.request().query(`SELECT * FROM [Hotelsoftware].[dbo].[user]
      WHERE Emailaddress LIKE '${email}' AND Passwort LIKE '${password}'`,
      function (error, results) {
        if (error) throw error
        if (results.recordset.length > 0) {
          const id = results.recordset[0].UserID
          res.json({ auth: true, id: id })
        }
        else {
          res.json({ auth: false, message: 'no user in existance' })
        }
      })
  }
})

module.exports = router