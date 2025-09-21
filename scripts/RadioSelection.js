/**
 * Dynamically generates html for a card with radio buttons for each option from the provided database source
 * @param {*} source The database array to query
 * @returns An html card with radio buttons
 */
export const RadioSelection = async (source) => {
    const response = await fetch(`http://localhost:8088/${source}`)
    const choices = await response.json()

    // Adds a class to each div for cypress tests
    const classMap = {
        'entrees': 'choices__base',
        'vegetables': 'choices__veggies', 
        'sides': 'choices__sides'
    }
    
    const containerClass = classMap[source]

    let html = `
            <div class="${containerClass} options">
            <h2>${source.toUpperCase()}</h2>
            
    `
    //Add a radio input for each option from the sourced database array
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