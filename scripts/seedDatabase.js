import mongoose from 'mongoose';
import MealPlan from '../models/MealPlan.js';
import connectDB from '../config/db.js';

const seedData = [
    {
        planType: 'southIndian',
        Monday: {
            Breakfast: { item: 'Ragi Dosa with Peanut Chutney + Boiled Eggs (2)', calories: 350 },
            // ... rest of Monday's meals
        },
        // ... rest of the week
    },
    {
        planType: 'northIndian',
        Monday: {
            Breakfast: { item: 'Jowar Roti with Paneer Bhurji + Boiled Eggs (2)', calories: 380 },
            // ... rest of Monday's meals
        },
        // ... rest of the week
    },
    {
        planType: 'continental',
        Monday: {
            Breakfast: { item: 'Quinoa Porridge with Berries + Boiled Eggs (2)', calories: 360 },
            // ... rest of Monday's meals
        },
        // ... rest of the week
    }
];

const seedDatabase = async () => {
    try {
        await connectDB();
        await MealPlan.deleteMany({}); // Clear existing data
        await MealPlan.insertMany(seedData);
        console.log('Database seeded successfully');
        process.exit(0);
    } catch (error) {
        console.error('Error seeding database:', error);
        process.exit(1);
    }
};

seedDatabase(); 