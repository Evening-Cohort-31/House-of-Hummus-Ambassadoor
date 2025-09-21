import { FoodTruck } from "./FoodTruck.js"
import { submitOrder, updateOrder } from "./pendingOrder.js"

const mainContainer = document.querySelector("#container")

/**
 * Injects the final html into the main container of the DOM
 */
const renderAllHTML = async () => {
    mainContainer.innerHTML = await FoodTruck()

    //Event listeners for radio and submit buttons
    document.addEventListener("change", updateOrder)
    document.querySelector("#purchase").addEventListener("click", submitOrder)
}

// Rerenders the DOM on each newOrder event
document.addEventListener("newOrder", renderAllHTML)

renderAllHTML()

