 

const express = require('express');
const connectDB = require('./config/db');
const booksRoutes = require('./routes/api/books');
const cors = require('cors');
require('dotenv').config();

const app = express();

// Middleware
const corsOptions = { 
origin: "YOUR_FRONTEND_URL", // frontend URI (ReactJS) 
} 
app.use(cors(corsOptions)); 
app.use(express.json({ extended: false }));
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello luziânia!'));

// Conecta o banco de dados
connectDB();

// Rotas
app.use('/api/books', booksRoutes);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));
