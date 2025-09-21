export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_expand=entree&_expand=vegetable&_expand=side")
    const sales = await response.json()

    let html = `<ul>`

    sales.forEach((sale) => {

        const sum = (sale.entree.price + sale.vegetable.price + sale.side.price).toLocaleString("en-US", { style: "currency", currency: "USD"})

        
        html += `<li class="purchase">Receipt #${sale.id} = ${sum}</li>`})

    html + `</ul>`


    return html
}

