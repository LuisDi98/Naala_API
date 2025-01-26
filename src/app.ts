import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import pinRoutes from './routes/pinRoutes';
import docxRoutes from './routes/docxRoutes';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();
const allowedOrigins = [
    "http://localhost:5173", // Desarrollo local
    "https://www.urbania-custom.com", // Producción
  ];

app.use(cors({
    origin: allowedOrigins,
    methods: "GET,POST,PUT,DELETE",
    allowedHeaders: "Content-Type,Authorization",
    credentials: true,
  }));
app.options("*", cors());  
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "https://www.urbania-custom.com");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    res.header("Access-Control-Allow-Credentials", "true");
    next();
});

app.use(express.json());
app.use('/api/pins', pinRoutes);
app.use('/api/docx', docxRoutes);

export default app;
