const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const { connctDB } = require('./config/database');

const app = express();

app.use(express.json());

app.use('/api', apiRoutes);

const setUpAndStartServer = () => {

    connctDB();
    
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();
