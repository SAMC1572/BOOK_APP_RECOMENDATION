const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

const dbURI = process.env.DB_URI;

mongoose.connect(dbURI)
  .then(() => console.log('Database connected'))
  .catch(err => console.log('Database connection error:', err));
