const mealPlan = {
    Monday: {
        Breakfast: "Idli with coconut chutney",
        Snack: "Fresh fruit",
        Lunch: "Vegetable sambar with rice",
        Snack2: "Roasted chickpeas",
        Dinner: "Vegetable dosa with tomato chutney"
    },
    Tuesday: {
        Breakfast: "Poha",
        Snack: "Buttermilk",
        Lunch: "Lemon rice",
        Snack2: "Cucumber slices",
        Dinner: "Khichdi"
    },
    // Continue for other days...
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
