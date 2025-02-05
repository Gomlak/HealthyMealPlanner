const mealPlan = {
    Monday: {
        Breakfast: "Idli with coconut chutney",
        Snack: "Fresh fruit",
        Lunch: "Vegetable sambar with rice and Avial",
        Snack2: "Roasted chickpeas",
        Dinner: "Vegetable dosa with tomato chutney"
    },
    Tuesday: {
        Breakfast: "Poha",
        Snack: "Buttermilk",
        Lunch: "Lemon rice with Beans Poriyal",
        Snack2: "Cucumber slices",
        Dinner: "Vegetable curry with chapati"
    },
    Wednesday: {
        Breakfast: "Upma",
        Snack: "Mixed nuts",
        Lunch: "Curd rice with Cabbage Kootu",
        Snack2: "Carrot sticks",
        Dinner: "Egg curry with chapati"
    },
    Thursday: {
        Breakfast: "Masala dosa",
        Snack: "Fruit salad",
        Lunch: "Bisibelebath with Carrot Poriyal",
        Snack2: "Sprouts salad",
        Dinner: "Tomato rice with boiled eggs"
    },
    Friday: {
        Breakfast: "Pesarattu",
        Snack: "Coconut water",
        Lunch: "Puliyogare with Avial",
        Snack2: "Boiled peanuts",
        Dinner: "Vegetable upma"
    },
    Saturday: {
        Breakfast: "Rava idli",
        Snack: "Lassi",
        Lunch: "Fish curry with rice",
        Snack2: "Fruit chaat",
        Dinner: "Egg dosa with tomato chutney"
    },
    Sunday: {
        Breakfast: "Appam with vegetable stew",
        Snack: "Tender coconut",
        Lunch: "Chicken biryani",
        Snack2: "Banana chips",
        Dinner: "Vegetable curry with chapati"
    }
};

function generateMealPlan() {
    const mealPlannerDiv = document.getElementById('meal-planner');
    mealPlannerDiv.innerHTML = ''; // Clear previous plan

    for (const day in mealPlan) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'meal-day';
        dayDiv.innerHTML = `<strong>${day}</strong><br>` +
            `Breakfast: ${mealPlan[day].Breakfast}<br>` +
            `Snack: ${mealPlan[day].Snack}<br>` +
            `Lunch: ${mealPlan[day].Lunch}<br>` +
            `Snack2: ${mealPlan[day].Snack2}<br>` +
            `Dinner: ${mealPlan[day].Dinner}`;
        
        mealPlannerDiv.appendChild(dayDiv);
    }
}

document.getElementById('generate-plan').addEventListener('click', generateMealPlan);
