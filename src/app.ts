import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import pinRoutes from './routes/pinRoutes';
import docxRoutes from './routes/docxRoutes';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// Asegurarse de que el preflight request está bien manejado
app.options("*", (req, res) => {
  res.setHeader("Access-Control-Allow-Origin", "https://www.urbania-custom.com");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.sendStatus(204);
});

app.use(cors({
  origin: ["https://www.urbania-custom.com", "http://localhost:5173"], // Producción y desarrollo
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));



  
app.use(express.json());
app.use('/api/pins', pinRoutes);
app.use('/api/docx', docxRoutes);

export default app;
