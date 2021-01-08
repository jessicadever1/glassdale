const contentTarget = document.querySelector(".noteListButton")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "showNotes") {
        const customEvent = new CustomEvent("showNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === "hideNotes") {
        const customEvent = new CustomEvent("hideNotesClicked")
        eventHub.dispatchEvent(customEvent)
    }
})

export const ShowNoteButton = () => {
    contentTarget.innerHTML = `
    <button id='showNotes'>Show Notes</button>
    <button id='hideNotes'>Hide Notes</button>
    `
}
