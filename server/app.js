require('dotenv').config(); 

const express = require('express');
const connectDB = require('./config/db');
const booksRoutes = require('./routes/api/books');
const cors = require('cors');

const app = express();

// Middleware
app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
  credentials: true
}));

app.use(express.json());

// Rota teste
app.get('/', (req, res) => res.send('Hello Luziânia!'));

// Conecta o banco de dados
connectDB();

// Rotas
app.use('/api/books', booksRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => {
  console.log(`🚀 Server running on port ${port}`);
});
