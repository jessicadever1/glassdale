/*

I want to be able to use the javascript data
that I got with officerDataProvider and turn
it into HTML that will be used on a dropdown
menu. That's what this module will do!

1. Imported data, and made sure to call the
data on this page, by bringing not just the
list that is useOfficers, but also the data
from getOfficers.

2. Determine where on the page that I want 
to import it.

3. create the select button with options. 
Wrote the render function to do that.

4. Now I have to get that button to 
return the criminals that the officer 
arrested. I'll need to create an 
eventListener that listens for an
officer to be selected. I want it to
listen from the eventHub. I'm a little
fuzzy on what this officer select button is
doing. So it's giving the option to select an
officer. and it's just listening for any kind
of change. So when that change happens it can
do soemthing. So now I have to write the thing it
has to do.

*/

import { useOfficers, getOfficers } from './officerDataProvider.js'

const contentElement = document.querySelector(".filters__officer")
const eventHub = document.querySelector(".container")

const render = officersList => {
    contentElement.innerHTML = `
        <select class="dropdown" id="officerSelect">
            <option value="0">Please select an officer...</option>
                ${
                    officersList.map(
                        (cop) => {
                         return `<option value="${cop.id}">${cop.name}</option>`
                        })
                }
        
        </select>
    `
}

eventHub.addEventListener("change", event => {
    if (event.target.id === "officerSelect") {
        const selectedOfficer = event.target.value
        const customEvent = new CustomEvent("officerChosen", {
            detail: {
                arrestingOfficer: selectedOfficer
            }
        })
        eventHub.dispatchEvent(customEvent)
    }
})

export const officerSelect = () => {
    getOfficers()
    .then( () => {
        const cops = useOfficers()
        render(cops)
    })
}