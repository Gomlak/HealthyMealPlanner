import express from 'express';
import connectDB from './config/db.js';
import mealPlanRoutes from './routes/mealPlans.js';

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
connectDB();

// Middleware
app.use(express.json());
app.use(express.static('public'));

// Routes
app.use('/api/mealplans', mealPlanRoutes);

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
}); 