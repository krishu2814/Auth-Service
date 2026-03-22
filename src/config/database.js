const mongoose = require('mongoose');
const { MONGO_URL } = require('./serverConfig');

const connctDB = async () => {
    try {
        await mongoose.connect(MONGO_URL);
        console.log('Connected to MongoDB');

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

module.exports = {
    connctDB
}
