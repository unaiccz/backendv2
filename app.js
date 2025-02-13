import express from 'express';
import cors from 'cors'; // prevent CORS errors
import { config } from 'dotenv';
import connectDB from './database/db.js'; // connect to database
import router from './controllers/Controller.js'; // import the router
const PORT = process.env.PORT || 3000;
connectDB();
const app = express();
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Conectar a la base de datos

app.use('/api', router); // use the router

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});