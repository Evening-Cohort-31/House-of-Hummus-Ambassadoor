// Transient state for the current pending order
const pendingOrder = {
    entreeId: null,
    vegetableId: null,
    sideId: null
}

/**
 * Sets the pendingOrder values based on the selected radio button
 * @param {*} event The triggering event
 */
export const updateOrder = async (event) => {
    // Sets the correct key for updating pendingOrder
    const keyMap = {
        entrees : "entreeId",
        vegetables: "vegetableId",
        sides: "sideId"
    }

    const key = keyMap[event.target.name]
    const value = event.target.id

    //Ensure the id is a number
    pendingOrder[key] = Number(value)
}

/**
 * Posts a new purchase to the purchases database
 */
export const submitOrder = async () => {

    // Make sure each meal has a selection
    if (!Object.values(pendingOrder).some(value => value === null)) {
        // Add timestamp
        const orderToSubmit = {...pendingOrder, timestamp: Date.now()}

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderToSubmit)
        }

        const response = await fetch("http://localhost:8088/purchases", postOptions)

        // Reset pendingOrder transient state to all nulls
        if (response.ok) {
            console.log("New Order Received")
            document.dispatchEvent(new CustomEvent("newOrder"))
            Object.keys(pendingOrder).forEach((key) => pendingOrder[key] = null)
        }
} else {
    // Alert user if additional selections needed
    window.alert("Please selection an option for each dish")
}
}

