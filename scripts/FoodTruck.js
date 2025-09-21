import { Sales } from "./Sales.js"
import { RadioSelection } from "./RadioSelection.js"


/**
 * 
 * @returns the html for the main page of House of Hummus
 */
export const FoodTruck = async () => {

    // Await the generation of each html component
    const salesHTML = await Sales()
    const entrees = await RadioSelection("entrees")
    const vegetables = await RadioSelection("vegetables")
    const sides = await RadioSelection("sides")

    // Return the main page html
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>

        <article>
            <section class="choice__container">
            ${entrees}
            ${vegetables}
            ${sides}
            </section>
            <button id="purchase">Purchase Combo</button>
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        </article>
    `
}
