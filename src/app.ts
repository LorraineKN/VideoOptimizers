import express from 'express';
import cors from 'cors';
import './config/db';
import connectDB from './config/db';
import userRoutes from './routes/authRoutes';
import { errorHandler } from './middleware/errorHandler';


const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(errorHandler);

// Routes
app.use('/api/users', userRoutes);

connectDB();

export default app;