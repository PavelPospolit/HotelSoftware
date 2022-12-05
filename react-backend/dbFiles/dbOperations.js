const config = require('./dbConfig'),
    sql = require('mssql')

const getEmployees = async () => {
    try {
        let pool = await sql.connect(config)
        let employees = pool.request().query('select * from [Hotelsoftware].[dbo].[User]')
        return (employees)
    }
    catch (err) {
        console.log(err);
    }
}

module.exports = {
    getEmployees
}