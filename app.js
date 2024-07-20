const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();
const authRoutes = require('./routes/auth');
const verifyToken = require('./middleware/authMiddleware');
const app = express();

// Debugging: Log environment variables
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('PORT:', process.env.PORT);

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));

app.use(express.json());
app.use('/auth', authRoutes);

// Example protected route
app.get('/profile', verifyToken, (req, res) => {
  res.json({ message: 'Authorized access', user: req.user });
});

// Add a route handler for the root URL
app.get('/', (req, res) => {
  res.send('Hello from backend side');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server started at port ${port}`);
});
