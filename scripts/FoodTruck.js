import { Sales } from "./Sales.js"
import { RadioSelection } from "./RadioSelection.js"

export const FoodTruck = async () => {
    const salesHTML = await Sales()
    const entrees = await RadioSelection("entrees")
    const vegetables = await RadioSelection("vegetables")
    const sides = await RadioSelection("sides")


    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            ${entrees}
            ${vegetables}
            ${sides}
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>

    `
}
