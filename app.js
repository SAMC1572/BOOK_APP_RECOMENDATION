const express = require('express');
const mongoose = require('mongoose');
const path = require('path'); // Make sure 'path' is required
require('dotenv').config();
const authRoutes = require('./routes/auth');
const app = express();

mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Database connected'))
  .catch(err => console.error(err));

app.use(express.json());
app.use(express.static(path.join(__dirname, 'public'))); // Serving static files

app.use('/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('Hello from backend side');
});

app.listen(process.env.PORT || 3000, () => {
  console.log(`Server started at port ${process.env.PORT || 3000}`);
});
