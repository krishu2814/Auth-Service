const express = require('express');

const { PORT } = require('./src/config/serverConfig');

const app = express();

const setUpAndStartServer = () => {
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();
