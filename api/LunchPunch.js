const sql = require('mssql');
require('dotenv').config();

const config = {
    user: process.env.USER,
    password: process.env.PASSWORD,
    server: process.env.SERVER,
    database: process.env.DATABASE,
    charset: process.env.CHARSET,
    options: {
        trustedconnection: true,
        enableArithAbort: true,
        trustServerCertificate: true,
        encrypt: false,
        instancename: process.env.INSTANCENAME
    },
}

async function addLunchServiceUsageAndRetrieveEmployee(empCode) {
    try {
        await sql.connect(config);

        const result = await sql.query`EXEC InsertLunchServiceUsage @EmpCode = ${empCode}`;

        await sql.close();

        if (result.recordset.length > 0) {
            return result.recordset; 
        } else {
            throw new Error('No employee data returned.');
        }
    } catch (err) {
        throw new Error('SQL error: ' + err.message); 
    }
}

module.exports = {
    addLunchServiceUsageAndRetrieveEmployee: addLunchServiceUsageAndRetrieveEmployee,
};