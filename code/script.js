const API = "967cabdca4d45ad5a19691662be081c0"
const city = 61 // London
const cuisine = 60 // Japanese

const apiURL = `https://developers.zomato.com/api/v2.1/search?entity_id=${city}&entity_type=city&cuisines=${cuisine}`

const restaurants = []
const main = document.querySelector('main')

const priceInfo = () => {
    main.innerHTML = ""
    restaurants.filter(resto => {
        if (resto.valueRange) {
            main.innerHTML += `<div class="pictures"><img src=${resto.restaurant.featured_image}/>
        <h3>${resto.name}</h3></div>`
        }
    })

}

fetch(apiURL, { headers: { "user-key": API } })
    .then((response) => {
        return response.json()
    })
    .then((json) => {
        json.restaurants.forEach(resto => {
            const value = resto.restaurant.price_range
            const type = resto.restaurant.establishment

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
                type
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
            console.log(img)
            console.log(raiting)
            console.log(location)
            console.log(name)
            console.log(price)

            document.getElementById("restaurants").innerHTML += `<ol><img src=${img}/>${name}${price}${location}${raiting}</ol>`

        })
    })




