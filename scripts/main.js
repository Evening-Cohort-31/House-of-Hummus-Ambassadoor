import { FoodTruck } from "./FoodTruck.js"
import { updateOrder } from "./pendingOrder.js"

const mainContainer = document.querySelector("#container")

const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()

    document.addEventListener("change", updateOrder)
}

renderAllHTML()

