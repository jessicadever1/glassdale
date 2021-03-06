/*
The noteForm component will create the HTML of
form. So first we locate where we want it, and
write a render function that will use innerHTML
to shove all that code where we want it.
*/
import {saveNote} from './noteDataProvider.js'
import {useCriminals, getCriminals} from '../criminals/criminalDataProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")


const render = (criminal) => {
    let criminalsCollection = useCriminals()

    contentTarget.innerHTML = `
    <input type="text" id="noteAuthor" placeholder="Your name...">
    <textarea id="text" placeholder="Write your note here..."></textarea>
    <select id="criminalId" class="criminalSelect">
        <option value="0">Please select a suspect...</option>
            ${
                criminalsCollection.map(
                    (criminal) => {
                        return `
                        <option value="${criminal.id}">${criminal.name}
                        </option>
                        `
                    }
                )
            }
    </select>
    <button id="saveNote">Save Note</button>
    `
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const author = document.querySelector("#noteAuthor").value
        const criminalId = parseInt(document.querySelector("#criminalId").value)
        const text = document.querySelector("#text").value
        // Make a new object representation of a note
        const newNote = {
            timestamp: Date.now(),
            author: author,
            criminalId: criminalId,
            text: text
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    getCriminals()
    .then(() => render())
}