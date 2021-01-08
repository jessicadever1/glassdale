import { getNotes, useNotes, deleteNote } from "./noteDataProvider.js";
import { NoteHTMLConverter } from "./note.js";
import { useCriminals } from "../criminals/criminalDataProvider.js"

// Query the DOM for the element that your notes will be added to 
const contentTarget = document.querySelector(".noteList")

// Define ye olde Evente Hubbe
const eventHub = document.querySelector(".container")

eventHub.addEventListener("showNotesClicked", customEvent => {
    NoteList()
})


// const closeNotes = (taco) => {
//     contentTarget.innerHTML = taco;
//     contentTarget.close();
// }

const closeNotes = () => {
    const container = document.querySelector(".noteList")
    container.innerHTML = "";
}

eventHub.addEventListener("click", event => {
    if (event.target.id === 'hideNotes'){
        closeNotes();
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("deleteNote--")) {
        const [prefix, noteId] = clickEvent.target.id.split("--")

        /*
            Invoke the function that performs the delete operation.

            Once the operation is complete you should THEN invoke
            useNotes() and render the note list again.
        */
       deleteNote(noteId)
       .then(
           () => {
               const updatedNotes = useNotes()
               const criminals = useCriminals()
               render(updatedNotes, criminals)
           }
       )
    }
})

const render = (noteArray, criminals) => {
    const allNotesConvertedToStrings = noteArray.map(
        // convert the notes objects to HTML with NoteHTMLConverter
        (noteArray) => {
            const associatedCriminal = criminals.find(
                (criminal) => {
                    return criminal.id === noteArray.criminalId
                }
            )

           return NoteHTMLConverter(noteArray, associatedCriminal)
        }
    ).join("")

    contentTarget.innerHTML = allNotesConvertedToStrings
}

// Standard list function you're used to writing by now. BUT, don't call this in main.js! Why not?
export const NoteList = () => {
    let criminals = useCriminals()
    
    getNotes()
        .then(() => {
            const allNotes = useNotes()
            render(allNotes, criminals)
        })
}