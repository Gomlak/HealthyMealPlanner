import express from 'express';
import MealPlan from '../models/MealPlan.js';

const router = express.Router();

router.get('/:planType', async (req, res) => {
    try {
        const mealPlan = await MealPlan.findOne({ planType: req.params.planType });
        if (!mealPlan) {
            return res.status(404).json({ message: 'Meal plan not found' });
        }
        res.json(mealPlan);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

export default router; 