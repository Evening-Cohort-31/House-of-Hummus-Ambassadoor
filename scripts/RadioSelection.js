export const RadioSelection = async (source) => {
    const response = await fetch(`http://localhost:8088/${source}`)
    const choices = await response.json()

    let html = `
            <div class="options">
            <h2>${source.toUpperCase()}</h2>
            
    `

    choices.forEach((choice) => {
        html += `
        <div>
            <input type="radio" id=${choice.id} name=${source} value=${choice.name}/>
            <label for=${choice.id}>${choice.name}</label>
        </div>
        `
    })

    html += "</div>"

    return html
}