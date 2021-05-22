const input = document.getElementById("input-text");

const button = document.getElementById('search');
button.addEventListener("click", function () {
    const text = input.value;

    // fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
    //     .then(res => res.json())
    //     .then((data) => {
    //         const newCategory = data.categories;
    //         console.log(newCategory);
    //         console.log(newCategory[0].strCategory);

    //         for (let i = 0; i < newCategory.length; i++) {
    //             const category = newCategory[i];
    //             console.log(category.strCategory);
    //             if (text != category.strCategory){
    //                 alert("Please enter a valid meal name!!")
    //             }
    //         }
    //         // const category = data.categories[0].strCategory;
    //         // console.log(category);

    //     })


    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`)
        .then(res => res.json())
        .then((data) => {
            if (text.length == 0) {
                alert("Please Enter A Meal Name");
            } else {
                const newMeals = data.meals;
                const mealsDiv = document.getElementById('meals');

                newMeals.forEach(meal => {
                    const mealDiv = document.createElement('div');

                    const mealInfo = `
                    <img src="${meal.strMealThumb}"/>
                    <a onclick="printNewMeal('${meal.strMeal}')">${meal.strMeal}</a>
                `;

                    mealDiv.innerHTML = mealInfo;
                    mealsDiv.appendChild(mealDiv);
                });

            }
        })
})

const printNewMeal = (name) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${name}`;

    fetch(url)
        .then(res => res.json())
        .then((data) => {
            const newData = data.meals;

            const mealDiv = document.getElementById('mealDetails');
            mealDiv.innerHTML = `
                <img src="${newData[0].strMealThumb}"/>
                <h3>${newData[0].strMeal}</h3>
                <h6>Ingredients</h6>
                <li>${newData[0].strMeasure1}</li>
                <li>${newData[0].strMeasure2}</li>
                <li>${newData[0].strMeasure3}</li>
                <li>${newData[0].strMeasure4}</li>
                <li>${newData[0].strMeasure5}</li>
                <li>${newData[0].strMeasure6}</li>
                <li>${newData[0].strMeasure7}</li>
                <li>${newData[0].strMeasure8}</li>
            `
        })
}