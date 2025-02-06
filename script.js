let mealPlan;

const southIndianPlan = {
    Monday: {
        Breakfast: { item: "Idli with coconut chutney", calories: 200, protein: 6 },
        Snack: { item: "Fresh fruit", calories: 50, protein: 1 },
        Lunch: { item: "Vegetable sambar with rice and Avial", calories: 400, protein: 10 },
        Snack2: { item: "Roasted chickpeas", calories: 100, protein: 5 },
        Dinner: { item: "Vegetable dosa with tomato chutney", calories: 300, protein: 8 }
    },
    Tuesday: {
        Breakfast: { item: "Upma with coconut chutney", calories: 250, protein: 7 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Fish curry with rice", calories: 450, protein: 25 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Chapati with vegetable curry", calories: 350, protein: 10 }
    },
    Wednesday: {
        Breakfast: { item: "Pongal with sambar", calories: 300, protein: 8 },
        Snack: { item: "Yogurt", calories: 100, protein: 5 },
        Lunch: { item: "Chicken biryani", calories: 500, protein: 30 },
        Snack2: { item: "Mixed nuts", calories: 150, protein: 5 },
        Dinner: { item: "Rava dosa with chutney", calories: 350, protein: 8 }
    },
    Thursday: {
        Breakfast: { item: "Dosa with sambar", calories: 250, protein: 7 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Vegetable pulao", calories: 400, protein: 10 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Chapati with paneer curry", calories: 350, protein: 15 }
    },
    Friday: {
        Breakfast: { item: "Idli with sambar", calories: 200, protein: 6 },
        Snack: { item: "Fresh fruit", calories: 50, protein: 1 },
        Lunch: { item: "Fish curry with rice", calories: 450, protein: 25 },
        Snack2: { item: "Roasted chickpeas", calories: 100, protein: 5 },
        Dinner: { item: "Vegetable dosa with tomato chutney", calories: 300, protein: 8 }
    },
    Saturday: {
        Breakfast: { item: "Upma with coconut chutney", calories: 250, protein: 7 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Vegetable sambar with rice and Avial", calories: 400, protein: 10 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Chapati with vegetable curry", calories: 350, protein: 10 }
    },
    Sunday: {
        Breakfast: { item: "Pongal with sambar", calories: 300, protein: 8 },
        Snack: { item: "Yogurt", calories: 100, protein: 5 },
        Lunch: { item: "Chicken biryani", calories: 500, protein: 30 },
        Snack2: { item: "Mixed nuts", calories: 150, protein: 5 },
        Dinner: { item: "Rava dosa with chutney", calories: 350, protein: 8 }
    }
};

const northIndianPlan = {
    Monday: {
        Breakfast: { item: "Aloo Paratha with curd", calories: 300, protein: 8 },
        Snack: { item: "Chana chaat", calories: 150, protein: 6 },
        Lunch: { item: "Rajma with rice", calories: 450, protein: 12 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Palak paneer with chapati", calories: 350, protein: 15 }
    },
    Tuesday: {
        Breakfast: { item: "Boiled eggs", calories: 140, protein: 12 },
        Snack: { item: "Fruit salad", calories: 100, protein: 2 },
        Lunch: { item: "Chicken curry with rice", calories: 500, protein: 30 },
        Snack2: { item: "Yogurt", calories: 100, protein: 5 },
        Dinner: { item: "Mixed vegetable curry with chapati", calories: 350, protein: 10 }
    },
    Wednesday: {
        Breakfast: { item: "Poha", calories: 250, protein: 5 },
        Snack: { item: "Mixed nuts", calories: 150, protein: 5 },
        Lunch: { item: "Fish curry with rice", calories: 450, protein: 25 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Dal with chapati", calories: 350, protein: 12 }
    },
    Thursday: {
        Breakfast: { item: "Aloo Paratha with curd", calories: 300, protein: 8 },
        Snack: { item: "Chana chaat", calories: 150, protein: 6 },
        Lunch: { item: "Rajma with rice", calories: 450, protein: 12 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Palak paneer with chapati", calories: 350, protein: 15 }
    },
    Friday: {
        Breakfast: { item: "Boiled eggs", calories: 140, protein: 12 },
        Snack: { item: "Fruit salad", calories: 100, protein: 2 },
        Lunch: { item: "Chicken curry with rice", calories: 500, protein: 30 },
        Snack2: { item: "Yogurt", calories: 100, protein: 5 },
        Dinner: { item: "Mixed vegetable curry with chapati", calories: 350, protein: 10 }
    },
    Saturday: {
        Breakfast: { item: "Poha", calories: 250, protein: 5 },
        Snack: { item: "Mixed nuts", calories: 150, protein: 5 },
        Lunch: { item: "Fish curry with rice", calories: 450, protein: 25 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Dal with chapati", calories: 350, protein: 12 }
    },
    Sunday: {
        Breakfast: { item: "Aloo Paratha with curd", calories: 300, protein: 8 },
        Snack: { item: "Chana chaat", calories: 150, protein: 6 },
        Lunch: { item: "Rajma with rice", calories: 450, protein: 12 },
        Snack2: { item: "Paneer tikka", calories: 200, protein: 10 },
        Dinner: { item: "Palak paneer with chapati", calories: 350, protein: 15 }
    }
};

const continentalPlan = {
    Monday: {
        Breakfast: { item: "Oatmeal with fruits", calories: 250, protein: 5 },
        Snack: { item: "Greek yogurt", calories: 100, protein: 10 },
        Lunch: { item: "Grilled chicken with quinoa", calories: 400, protein: 30 },
        Snack2: { item: "Hummus with carrot sticks", calories: 150, protein: 5 },
        Dinner: { item: "Salmon with steamed vegetables", calories: 350, protein: 25 }
    },
    Tuesday: {
        Breakfast: { item: "Scrambled eggs", calories: 200, protein: 15 },
        Snack: { item: "Apple slices with peanut butter", calories: 150, protein: 4 },
        Lunch: { item: "Fish tacos", calories: 450, protein: 25 },
        Snack2: { item: "Cheese sticks", calories: 100, protein: 6 },
        Dinner: { item: "Vegetable stir-fry with tofu", calories: 350, protein: 20 }
    },
    Wednesday: {
        Breakfast: { item: "Pancakes with syrup", calories: 300, protein: 6 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Chicken salad", calories: 400, protein: 30 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Pasta with marinara sauce", calories: 350, protein: 10 }
    },
    Thursday: {
        Breakfast: { item: "Oatmeal with fruits", calories: 250, protein: 5 },
        Snack: { item: "Greek yogurt", calories: 100, protein: 10 },
        Lunch: { item: "Grilled chicken with quinoa", calories: 400, protein: 30 },
        Snack2: { item: "Hummus with carrot sticks", calories: 150, protein: 5 },
        Dinner: { item: "Salmon with steamed vegetables", calories: 350, protein: 25 }
    },
    Friday: {
        Breakfast: { item: "Scrambled eggs", calories: 200, protein: 15 },
        Snack: { item: "Apple slices with peanut butter", calories: 150, protein: 4 },
        Lunch: { item: "Fish tacos", calories: 450, protein: 25 },
        Snack2: { item: "Cheese sticks", calories: 100, protein: 6 },
        Dinner: { item: "Vegetable stir-fry with tofu", calories: 350, protein: 20 }
    },
    Saturday: {
        Breakfast: { item: "Pancakes with syrup", calories: 300, protein: 6 },
        Snack: { item: "Boiled egg", calories: 70, protein: 6 },
        Lunch: { item: "Chicken salad", calories: 400, protein: 30 },
        Snack2: { item: "Fruit salad", calories: 100, protein: 2 },
        Dinner: { item: "Pasta with marinara sauce", calories: 350, protein: 10 }
    },
    Sunday: {
        Breakfast: { item: "Oatmeal with fruits", calories: 250, protein: 5 },
        Snack: { item: "Greek yogurt", calories: 100, protein: 10 },
        Lunch: { item: "Grilled chicken with quinoa", calories: 400, protein: 30 },
        Snack2: { item: "Hummus with carrot sticks", calories: 150, protein: 5 },
        Dinner: { item: "Salmon with steamed vegetables", calories: 350, protein: 25 }
    }
};

document.getElementById('generate-plan').addEventListener('click', () => {
    const planType = document.getElementById('plan-type').value;
    switch (planType) {
        case 'southIndian':
            mealPlan = southIndianPlan;
            generateMealPlan();
            break;
        case 'northIndian':
            mealPlan = northIndianPlan;
            generateMealPlan();
            break;
        case 'continental':
            mealPlan = continentalPlan;
            generateMealPlan();
            break;
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
