export const Sales = async () => {
    const response = await fetch("http://localhost:8088/purchases?_extend=entree&_extend=vegetable&_extend=side")
    const sales = await response.json()

    let html = ``

    sales.forEach((sale) => {

        const sum = (sale.entree.price + sale.vegetable.price + sale.side.price).toLocaleString("en-US", { style: "currency", currency: "USD"})

        
        html += `<div class="purchase">
            <p>Receipt #${sale.id} = ${sum} </p>
        </div>`})


    return html
}

