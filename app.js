import express from 'express';
import cors from 'cors'; // prevent CORS errors
import { config } from 'dotenv';
import connectDB from './database/db.js'; // connect to database
import router from './controllers/Controller.js'; // import the router
const PORT = process.env.PORT || 3000;
connectDB();
<<<<<<< HEAD
=======

const port = 10000;
>>>>>>> d669a482f88b82bc5091632d2cdc48553a777fa1
const app = express();

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
app.use(cors());
app.use(express.json()); // parse JSON bodies

// Conectar a la base de datos

app.use('/api', router); // use the router

<<<<<<< HEAD
app.listen(PORT, 'localhost',  () => {
  console.log(`Server running on port ${PORT}`);
});
=======
app.listen(port, 'localhost',  () => {
  console.log(`Server running on port ${port}`);
});
>>>>>>> d669a482f88b82bc5091632d2cdc48553a777fa1
