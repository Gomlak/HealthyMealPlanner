import mongoose from 'mongoose';

const mealItemSchema = new mongoose.Schema({
    item: {
        type: String,
        required: true
    },
    calories: {
        type: Number,
        required: true
    }
});

const dailyMealSchema = new mongoose.Schema({
    Breakfast: mealItemSchema,
    Snack: mealItemSchema,
    Lunch: mealItemSchema,
    Snack2: mealItemSchema,
    Dinner: mealItemSchema
});

const mealPlanSchema = new mongoose.Schema({
    planType: {
        type: String,
        required: true,
        enum: ['southIndian', 'northIndian', 'continental']
    },
    Monday: dailyMealSchema,
    Tuesday: dailyMealSchema,
    Wednesday: dailyMealSchema,
    Thursday: dailyMealSchema,
    Friday: dailyMealSchema,
    Saturday: dailyMealSchema,
    Sunday: dailyMealSchema
});

export default mongoose.model('MealPlan', mealPlanSchema); 