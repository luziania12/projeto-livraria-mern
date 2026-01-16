const mongoose = require('mongoose');

const uri = process.env.MONGODB_URI;

const connectDB = async () => {
  try {
    mongoose.set('strictQuery', true);

    await mongoose.connect(uri);

    console.log('MongoDB está conectado...');
  } catch (err) {
    console.error('Erro ao conectar no MongoDB:', err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
