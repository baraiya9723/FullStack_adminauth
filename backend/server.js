const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const sequelize = require('./config/database');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');
// Initialize dotenv for environment variables
require('dotenv').config();

// Initialize Express app
const app = express();

// Middleware
app.use(cookieParser());
app.use(
    cors({
        origin: "http://localhost:3000", // Replace with your frontend URL
        credentials: true, // Allow cookies
    })
);
app.use(bodyParser.json());

// API Routes
app.use('/api/auth', authRoutes);

// Test Database Connection
sequelize
    .authenticate()
    .then(() => {
        console.log('Database connected...');
        return sequelize.sync({ force: false }); // Set `force: true` only during development for resetting tables
    })
    .then(() => {
        console.log('Tables synced...');
    })
    .catch((err) => console.error('Database connection error: ', err));

// Start the Server
const PORT = process.env.PORT || 3000; 
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
