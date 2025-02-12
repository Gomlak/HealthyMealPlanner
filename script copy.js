let mealPlan;

const southIndianPlan = {
    Monday: {
        Breakfast: { item: "Idli with coconut chutney, fresh fruit, and mixed nuts", calories: 350, protein: 9 },
        Snack: { item: "Roasted chickpeas", calories: 100, protein: 5 },
        Lunch: { item: "Vegetable sambar with rice, Avial, carrot curry, and mango juice", calories: 700, protein: 20 },
        Snack2: { item: "Greek yogurt", calories: 100, protein: 10 },
        Dinner: { item: "Vegetable dosa with tomato chutney", calories: 300, protein: 8 },
        TotalCalories: 1550
    },
    Tuesday: {
        Breakfast: { item: "Upma with coconut chutney, fresh fruit, and mixed nuts", calories: 350, protein: 9 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Fish curry with rice, beetroot curry, and orange juice", calories: 700, protein: 30 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Chapati with vegetable curry", calories: 350, protein: 10 },
        TotalCalories: 1570
    },
    Wednesday: {
        Breakfast: { item: "Pongal with sambar, fresh fruit, and mixed nuts", calories: 400, protein: 10 },
        Snack: { item: "Yogurt", calories: 100, protein: 5 },
        Lunch: { item: "Chicken biryani, vegetable curry, and juice", calories: 700, protein: 35 },
        Snack2: { item: "Mixed nuts", calories: 150, protein: 5 },
        Dinner: { item: "Rava dosa with chutney", calories: 350, protein: 8 },
        TotalCalories: 1700
    },
    Thursday: {
        Breakfast: { item: "Dosa with sambar, fresh fruit, and mixed nuts", calories: 350, protein: 9 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Vegetable pulao, vegetable curry, and juice", calories: 700, protein: 20 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Chapati with paneer curry", calories: 350, protein: 15 },
        TotalCalories: 1570
    },
    Friday: {
        Breakfast: { item: "Idli with sambar, fresh fruit, and mixed nuts", calories: 350, protein: 9 },
        Snack: { item: "Roasted chickpeas", calories: 100, protein: 5 },
        Lunch: { item: "Fish curry with rice, vegetable curry, and juice", calories: 700, protein: 30 },
        Snack2: { item: "Greek yogurt", calories: 100, protein: 10 },
        Dinner: { item: "Vegetable dosa with tomato chutney", calories: 300, protein: 8 },
        TotalCalories: 1560
    },
    Saturday: {
        Breakfast: { item: "Upma with coconut chutney, fresh fruit, and mixed nuts", calories: 350, protein: 9 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Vegetable sambar with rice, Avial, vegetable curry, and juice", calories: 700, protein: 20 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Chapati with vegetable curry", calories: 350, protein: 10 },
        TotalCalories: 1570
    },
    Sunday: {
        Breakfast: { item: "Pongal with sambar, fresh fruit, and mixed nuts", calories: 400, protein: 10 },
        Snack: { item: "Yogurt", calories: 100, protein: 5 },
        Lunch: { item: "Chicken biryani, vegetable curry, and juice", calories: 700, protein: 35 },
        Snack2: { item: "Mixed nuts", calories: 150, protein: 5 },
        Dinner: { item: "Rava dosa with chutney", calories: 350, protein: 8 },
        TotalCalories: 1700
    }
};

const northIndianPlan = {
    Monday: {
        Breakfast: { item: "Aloo Paratha with curd, fresh fruit, and mixed nuts", calories: 450, protein: 12 },
        Snack: { item: "Chana chaat", calories: 150, protein: 6 },
        Lunch: { item: "Rajma with rice, vegetable curry, and juice", calories: 700, protein: 20 },
        Snack2: { item: "Greek yogurt", calories: 100, protein: 10 },
        Dinner: { item: "Palak paneer with chapati", calories: 350, protein: 15 },
        TotalCalories: 1760
    },
    Tuesday: {
        Breakfast: { item: "Boiled eggs, fresh fruit, and mixed nuts", calories: 350, protein: 16 },
        Snack: { item: "Fruit salad", calories: 100, protein: 2 },
        Lunch: { item: "Chicken curry with rice, vegetable curry, and juice", calories: 700, protein: 35 },
        Snack2: { item: "Yogurt", calories: 100, protein: 5 },
        Dinner: { item: "Mixed vegetable curry with chapati", calories: 350, protein: 10 },
        TotalCalories: 1605
    },
    Wednesday: {
        Breakfast: { item: "Poha, fresh fruit, and mixed nuts", calories: 400, protein: 8 },
        Snack: { item: "Mixed nuts", calories: 150, protein: 5 },
        Lunch: { item: "Fish curry with rice, vegetable curry, and juice", calories: 700, protein: 30 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Dal with chapati", calories: 350, protein: 12 },
        TotalCalories: 1810
    },
    Thursday: {
        Breakfast: { item: "Aloo Paratha with curd, fresh fruit, and mixed nuts", calories: 450, protein: 12 },
        Snack: { item: "Chana chaat", calories: 150, protein: 6 },
        Lunch: { item: "Rajma with rice, vegetable curry, and juice", calories: 700, protein: 20 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Palak paneer with chapati", calories: 350, protein: 15 },
        TotalCalories: 1810
    },
    Friday: {
        Breakfast: { item: "Boiled eggs, fresh fruit, and mixed nuts", calories: 350, protein: 16 },
        Snack: { item: "Fruit salad", calories: 100, protein: 2 },
        Lunch: { item: "Chicken curry with rice, vegetable curry, and juice", calories: 700, protein: 35 },
        Snack2: { item: "Yogurt", calories: 100, protein: 5 },
        Dinner: { item: "Mixed vegetable curry with chapati", calories: 350, protein: 10 },
        TotalCalories: 1605
    },
    Saturday: {
        Breakfast: { item: "Poha, fresh fruit, and mixed nuts", calories: 400, protein: 8 },
        Snack: { item: "Mixed nuts", calories: 150, protein: 5 },
        Lunch: { item: "Fish curry with rice, vegetable curry, and juice", calories: 700, protein: 30 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Dal with chapati", calories: 350, protein: 12 },
        TotalCalories: 1810
    },
    Sunday: {
        Breakfast: { item: "Aloo Paratha with curd, fresh fruit, and mixed nuts", calories: 450, protein: 12 },
        Snack: { item: "Chana chaat", calories: 150, protein: 6 },
        Lunch: { item: "Rajma with rice, vegetable curry, and juice", calories: 700, protein: 20 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Palak paneer with chapati", calories: 350, protein: 15 },
        TotalCalories: 1810
    }
};

const continentalPlan = {
    Monday: {
        Breakfast: { item: "Oatmeal with fruits, mixed nuts, and juice", calories: 400, protein: 10 },
        Snack: { item: "Greek yogurt", calories: 100, protein: 10 },
        Lunch: { item: "Grilled chicken with quinoa, vegetable curry, and juice", calories: 700, protein: 40 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Salmon with steamed vegetables", calories: 350, protein: 25 },
        TotalCalories: 1750
    },
    Tuesday: {
        Breakfast: { item: "Scrambled eggs, fresh fruit, and mixed nuts", calories: 400, protein: 20 },
        Snack: { item: "Apple slices with peanut butter", calories: 150, protein: 4 },
        Lunch: { item: "Fish tacos, vegetable curry, and juice", calories: 700, protein: 30 },
        Snack2: { item: "Cheese sticks", calories: 100, protein: 6 },
        Dinner: { item: "Vegetable stir-fry with tofu", calories: 350, protein: 20 },
        TotalCalories: 1700
    },
    Wednesday: {
        Breakfast: { item: "Pancakes with syrup, fresh fruit, and mixed nuts", calories: 400, protein: 10 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Chicken salad, vegetable curry, and juice", calories: 700, protein: 35 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Pasta with marinara sauce", calories: 350, protein: 10 },
        TotalCalories: 1630
    },
    Thursday: {
        Breakfast: { item: "Oatmeal with fruits, mixed nuts, and juice", calories: 400, protein: 10 },
        Snack: { item: "Greek yogurt", calories: 100, protein: 10 },
        Lunch: { item: "Grilled chicken with quinoa, vegetable curry, and juice", calories: 700, protein: 40 },
        Snack2: { item: "Hummus with carrot sticks", calories: 150, protein: 5 },
        Dinner: { item: "Salmon with steamed vegetables", calories: 350, protein: 25 },
        TotalCalories: 1750
    },
    Friday: {
        Breakfast: { item: "Scrambled eggs, fresh fruit, and mixed nuts", calories: 400, protein: 20 },
        Snack: { item: "Apple slices with peanut butter", calories: 150, protein: 4 },
        Lunch: { item: "Fish tacos, vegetable curry, and juice", calories: 700, protein: 30 },
        Snack2: { item: "Cheese sticks", calories: 100, protein: 6 },
        Dinner: { item: "Vegetable stir-fry with tofu", calories: 350, protein: 20 },
        TotalCalories: 1700
    },
    Saturday: {
        Breakfast: { item: "Pancakes with syrup, fresh fruit, and mixed nuts", calories: 400, protein: 10 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Chicken salad, vegetable curry, and juice", calories: 700, protein: 35 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Pasta with marinara sauce", calories: 350, protein: 10 },
        TotalCalories: 1630
    },
    Sunday: {
        Breakfast: { item: "Oatmeal with fruits, mixed nuts, and juice", calories: 400, protein: 10 },
        Snack: { item: "Greek yogurt", calories: 100, protein: 10 },
        Lunch: { item: "Grilled chicken with quinoa, vegetable curry, and juice", calories: 700, protein: 40 },
        Snack2: { item: "Hummus with carrot sticks", calories: 150, protein: 5 },
        Dinner: { item: "Salmon with steamed vegetables", calories: 350, protein: 25 },
        TotalCalories: 1750
    }
};

document.getElementById('generate-plan').addEventListener('click', async () => {
    const planType = document.getElementById('plan-type').value;
    try {
        const response = await fetch(`/api/mealplans/${planType}`);
        if (!response.ok) {
            throw new Error('Failed to fetch meal plan');
        }
        mealPlan = await response.json();
        generateMealPlan();
    } catch (error) {
        console.error('Error fetching meal plan:', error);
        alert('Failed to load meal plan. Please try again.');
    }
});

function generateMealPlan() {
    const mealPlannerDiv = document.getElementById('meal-planner');
    mealPlannerDiv.innerHTML = ''; // Clear previous plan

    for (const day in mealPlan) {
        const dayDiv = document.createElement('div');
        dayDiv.className = 'meal-day';

        let totalCalories = 0;
        for (const meal in mealPlan[day]) {
            totalCalories += mealPlan[day][meal].calories;
        }

        dayDiv.innerHTML = `<strong>${day}</strong><br>` +
            `<table>
                <tr>
                    <th>Meal</th>
                    <th>Item</th>
                    <th>Calories</th>
                </tr>
                <tr>
                    <td>Breakfast</td>
                    <td>${mealPlan[day].Breakfast.item}</td>
                    <td>${mealPlan[day].Breakfast.calories}</td>
                </tr>
                <tr>
                    <td>Snack</td>
                    <td>${mealPlan[day].Snack.item}</td>
                    <td>${mealPlan[day].Snack.calories}</td>
                </tr>
                <tr>
                    <td>Lunch</td>
                    <td>${mealPlan[day].Lunch.item}</td>
                    <td>${mealPlan[day].Lunch.calories}</td>
                </tr>
                <tr>
                    <td>Snack2</td>
                    <td>${mealPlan[day].Snack2.item}</td>
                    <td>${mealPlan[day].Snack2.calories}</td>
                </tr>
                <tr>
                    <td>Dinner</td>
                    <td>${mealPlan[day].Dinner.item}</td>
                    <td>${mealPlan[day].Dinner.calories}</td>
                </tr>
            </table>` +
            `<p><strong>Total Calories: ${totalCalories}</strong></p>`;
        
        mealPlannerDiv.appendChild(dayDiv);
    }
}