// app.js
const express = require('express');
const blogRoutes = require('./routes/blogRoutes');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json()); // Middleware to parse JSON

app.use('/api', blogRoutes); // Register blog routes

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
