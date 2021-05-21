const input = document.getElementById('input-text');
// const foodTitle = document.getElementById('card-title');
// const cardImg = document.getElementById('card-img');

const button = document.getElementById('search');
button.addEventListener('click', function () {
    const text = input.value;
    console.log(text);

    fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${text}`)
        .then(res => res.json())
        .then((data) => {
            const newMeal = data.meals;
            console.log(newMeal);

            // let foodName = newMeal[0].strMeal;
            // console.log(foodName);
            // foodTitle.innerText = foodName;

            // let img = newMeal[0].strMealThumb;
            // console.log(img);
            // cardImg.src = img;
            let row = document.getElementById('rows');

            for (let i = 0; i < newMeal.length; i++) {
                let foodName = newMeal[i].strMeal;
                console.log(foodName);
                // foodTitle.innerText = foodName;

                let img = newMeal[i].strMealThumb;
                console.log(img);
                // cardImg.src = img;

                const image = document.createElement('img');
                image.src = img;
                const h5 = document.createElement('h5');
                h5.innerText = foodName;
                let newDiv = document.createElement('div');
                newDiv.appendChild(image);
                newDiv.appendChild(h5);
                row.appendChild(newDiv);
            }
        })


})