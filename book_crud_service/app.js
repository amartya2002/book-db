const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');
const bodyParser = require('body-parser');
const bookRoutes = require('./routes/bookRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
app.use(cors()); 

app.use(bodyParser.json());

app.use('/api/books', bookRoutes);

app.get('/', (req, res) => {
  res.send('Welcome to your Sequelize + Express application!');
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});



