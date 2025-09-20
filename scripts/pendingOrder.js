const pendingOrder = {
    entreeId: null,
    vegetableId: null,
    sideId: null
}

export const updateOrder = async (event) => {
    const keyMap = {
        entrees : "entreeId",
        vegetables: "vegetableId",
        sides: "sideId"
    }

    const key = keyMap[event.target.name]
    const value = event.target.id

    pendingOrder[key] = Number(value)
}

export const submitOrder = async () => {

    if (!Object.values(pendingOrder).some(value => value === null)) {
        const orderToSubmit = {...pendingOrder, timestamp: Date.now()}

        const postOptions = {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(orderToSubmit)
        }
        const response = await fetch("http://localhost:8088/purchases", postOptions)

        if (response.ok) {
            console.log("New Order Received")
            document.dispatchEvent(new CustomEvent("newOrder"))
            Object.keys(pendingOrder).forEach((key) => pendingOrder[key] = null)
            console.log(pendingOrder)
        }
} else {
    window.alert("Please selection an option for each dish")
}
}

