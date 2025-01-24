import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db';
import pinRoutes from './routes/pinRoutes';
import docxRoutes from './routes/docxRoutes';
import cors from 'cors';

dotenv.config();
connectDB();

const app = express();

// Configurar CORS solo para "https://www.urbania-custom.com/"
app.use(cors());

app.use(express.json());



app.use('/api/pins', pinRoutes);
app.use('/api/docx', docxRoutes);

export default app;
