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
app.use(cors({
  origin: "https://www.urbania-custom.com",
  methods: "GET,POST,PUT,DELETE",
  allowedHeaders: "Content-Type,Authorization",
  credentials: true,  // Si necesitas enviar cookies o credenciales de sesión
}));

app.use(express.json());

app.use("/", (req, res) => {
    res.json({ msg: "saludos" });
});

app.use('/api/pins', pinRoutes);
app.use('/api/docx', docxRoutes);

export default app;
