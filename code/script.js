const API = "967cabdca4d45ad5a19691662be081c0"
const city = 61 // London
const cuisine = 60 // Japanese

const apiURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${city}&entity_type=city&cuisines=${cuisine}`

const restaurants = []
const main = document.querySelector('main')


fetch(apiURL, { headers: { "user-key": API } })
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        json.restaurants.forEach(resto => {
            const value = resto.restaurant.price_range
            const dollar = resto.restaurant.price_range

            let range = resto.restaurant.price_range
            if (range <= 2) {
                range = "low"
            }
            if (range === 3) {
                range = "medium"
            }
            if (range > 3) {
                range = "high"
            }
            restaurants.push({
                name: resto.restaurant.name,
                price: resto.restaurant.average_cost_for_two,
                raiting: resto.restaurant.user_rating.aggregate_rating,
                img: resto.restaurant.featured_image,
                location: resto.restaurant.location.address,
                valueRange: range,
                value,
                dollar

            })
        })
        console.log(restaurants)

        json.restaurants.forEach((resto) => {
            console.log(resto.restaurant)
            const name = resto.restaurant.name
            const price = resto.restaurant.average_cost_for_two
            const location = resto.restaurant.location.address
            const raiting = resto.restaurant.user_rating.aggregate_rating
            const img = resto.restaurant.thumb
            document.getElementById("restaurants").innerHTML += `<div class="restaurant-container"><img class="dishes-img" src=${img}><h2 class"rest-name">${name}</h2><span class="rating">${raiting}/5 ⭐️</span><span class="price">Averege price: ${price / 2}💲</span><span class="location">📍${location}</span> </div> `

        })
    })

