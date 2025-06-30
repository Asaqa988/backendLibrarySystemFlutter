/* eslint-disable no-undef */
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bookRoutes from './routes/bookRoutes.js';

dotenv.config();

const app = express();
app.use(express.json());

app.use('/Library', bookRoutes);

mongoose
  // eslint-disable-next-line no-undef
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT||process.env.PORT1, () => {
      console.log(`Server running on http://localhost:${process.env.PORT} ya batal`);
    });
  })
  .catch((err) => console.error(err));
