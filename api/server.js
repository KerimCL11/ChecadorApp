var LunchPunch = require('./LunchPunch');
var express = require('express');
var app = express();
var router = express.Router();
const cors = require('cors');
require('dotenv').config();

// Express App Configuration
const PORT = process.env.port;
const IP = process.env.server;

app.use(cors({ //cors
    origin: '*'
}));
app.use(express.json()); //json
app.use(express.urlencoded( //sabe que es pero asi agarra chilo
    { extended: false }
));

app.use('/', router); //main route

// app.listen(PORT, IP, () => { // Prod
//     console.log("Server is running on http://" + IP + ":" + PORT)
// })

app.listen(PORT, () => {// Dev
    console.log("Server is running on http://localhost:" + PORT)
})


// Routes
router.route('/punch/:empCode').post(async (req, res) => {
    let empCode = req.params.empCode;
    try {
        const employeeData = await LunchPunch.addLunchServiceUsageAndRetrieveEmployee(empCode);
        res.status(200).json(employeeData); // Send the employee data back to the client
        // console.log('Enployee eating...')
    } catch (error) {
        res.status(500).send(error.message); // Send the error message back to the client
        // console.error(error.message)
    }
})