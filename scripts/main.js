import { FoodTruck } from "./FoodTruck.js"
import { submitOrder, updateOrder } from "./pendingOrder.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()

    document.addEventListener("change", updateOrder)
    document.querySelector("#purchase").addEventListener("click", submitOrder)
}

document.addEventListener("newOrder", renderAllHTML)

renderAllHTML()

