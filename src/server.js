const express = require('express');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 3001;
const hostnamme = process.env.HOST_NAME;
const configViewEngine = require('./config/viewEngine');
const webRouters = require('./routes/web');
const connection = require('./config/database')
//config req.body
app.use(express.json());
app.use(express.urlencoded({ extends: true }))
//khai báo route
app.use('/', webRouters);
configViewEngine(app);
app.listen(port, hostnamme, () => {
    console.log(`Example app listening on port ${port}`);
});
