import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import pinRoutes from './routes/pinRoutes';
import docxRoutes from './routes/docxRoutes';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();


app.use(cors({
  origin: ["https://www.urbania-custom.com", "http://localhost:5173"],  // Agregar producción y desarrollo
  methods: ["GET", "POST", "PUT", "DELETE"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));
  
app.use(express.json());
app.use('/api/pins', pinRoutes);
app.use('/api/docx', docxRoutes);

export default app;
