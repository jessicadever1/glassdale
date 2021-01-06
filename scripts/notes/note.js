export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <div class="note__timestamp"><strong>Date: </strong>${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
            <div class="note__author"><strong>Author: </strong>${ noteObject.author }</div>
            <div class="note__title"><strong>Suspect: </strong>${ criminalObject.name }</div>
            <div class="note__text">${ noteObject.text }</div>
            <button id="deleteNote--${noteObject.id}">Delete</button>
        </section>
    `
}

 