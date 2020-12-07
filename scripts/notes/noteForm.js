/*
The noteForm component will create the HTML of
form. So first we locate where we want it, and
write a render function that will use innerHTML
to shove all that code where we want it.
*/
import {saveNote} from './noteDataProvider.js'

const contentTarget = document.querySelector(".noteFormContainer")
const eventHub = document.querySelector(".container")



const render = () => {
    contentTarget.innerHTML = `
    <input type="text" id="noteAuthor" placeholder="Your name...">
    <textarea id="text" placeholder="Write your note here..."></textarea>
    <input type="text" id="suspect" placeholder="Suspect name...">
    <button id="saveNote">Save Note</button>
    `
}


// Handle browser-generated click event in component
eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "saveNote") {

        const author = document.querySelector("#noteAuthor").value
        const suspect = document.querySelector("#suspect").value
        const text = document.querySelector("#text").value
        // Make a new object representation of a note
        const newNote = {
            timestamp: Date.now(),
            author: author,
            suspect: suspect,
            text: text
        }

        // Change API state and application state
        saveNote(newNote)
    }
})

export const NoteForm = () => {
    render()
}