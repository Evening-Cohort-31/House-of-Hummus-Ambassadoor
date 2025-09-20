export const RadioSelection = async (source) => {
    const response = await fetch(`http://localhost:8088/${source}`)
    const choices = await response.json()

    // Map source names to the expected CSS classes for Cypress tests
    const classMap = {
        'entrees': 'choices__base',
        'vegetables': 'choices__veggies', 
        'sides': 'choices__sides'
    }
    
    const containerClass = classMap[source] || 'options'

    let html = `
            <div class="${containerClass} options">
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