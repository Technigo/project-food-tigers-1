const API = "967cabdca4d45ad5a19691662be081c0";
const city = 61; // London
const cuisine = 60; // Japanese

const apiURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${city}&entity_type=city&cuisines=${cuisine}`

fetch(apiURL, {
    headers: { "user-key": API }
})
    .then((response) => {
        return response.json();
    })
    .then((json) => {
        console.log(json)

        json.restaurants.forEach((resto) => {
            console.log(resto.restaurant);
            const name = resto.restaurant.name;
            const price = resto.restaurant.average_cost_for_two;
            const location = resto.restaurant.location;
            const raiting = resto.restaurant.user_rating.aggregate_rating;
            const img = resto.restaurant.featured_image;
            console.log(img)
            console.log(raiting)
            console.log(location)
            console.log(name)
            console.log(price)
            document.getElementById("restaurants").innerHTML += `<li>${resto.restaurant.name}</li>`

        });
    });


