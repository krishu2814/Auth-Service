const express = require('express');

const { PORT } = require('./config/serverConfig');
const apiRoutes = require('./routes/index');
const { connctDB } = require('./config/database');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(require('./middleware/correlation-middleware'));

app.use('/api', apiRoutes);

// Global Error & 404 Handlers
app.use(require('./middleware/not-found-handler'));
app.use(require('./middleware/error-handler'));

const setUpAndStartServer = () => {

    connctDB();
    
    app.listen(PORT, () => {
        console.log(`Server started at ${PORT}`);
    })
}

setUpAndStartServer();
