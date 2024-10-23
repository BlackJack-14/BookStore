import express from 'express';
import { PORT, mongoDBURL } from './config.js';
import mongoose from 'mongoose';
import booksRoutes from './routes/bookRoute.js';
import cors from 'cors';
import userRoutes from './routes/userRoute.js';
const app = express();

app.use(express.json());

// Simplified Logging Middleware
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
    next();
});

// Root Route
app.get('/', (req, res) => {
    return res.status(200).send("This is the backend server for my online book store");
});

const corsOptions = {
    origin: ['http://10.6.1.147:5173', 'http://localhost:5173', 'http://0.0.0.0', 'http://172.20.10.6:5173/'],
    optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.use('/books', booksRoutes);
app.use('/users', userRoutes);


// MongoDB Connection and Server Start
mongoose
    .connect(mongoDBURL)
    .then(() => {
        console.log('Connected to MongoDB');
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch((error) => {
        console.log('MongoDB connection error:', error);
    });
