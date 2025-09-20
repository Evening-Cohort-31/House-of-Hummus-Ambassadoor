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

    pendingOrder[key] = value
}

