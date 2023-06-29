const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

// ??
const app = express();
app.use(express.json());

// const db = require("./app/models")

const corsOptions = {
    origin: "http://localhost:8081"
};
app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//parse requests of content0type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true}));

//simple route
app.get("/", (req, res) => {
    res.json({ message: "Welcome to tutorial Application." });

});

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}.`);
});