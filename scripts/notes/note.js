export const NoteHTMLConverter = (noteObject) => {
    return `
        <section class="note">
            <div class="note__timestamp"><strong>Date: </strong>${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
            <div class="note__author"><strong>Author: </strong>${ noteObject.author }</div>
            <div class="note__title"><strong>Suspect: </strong>${ noteObject.suspect }</div>
            <div class="note__text">${ noteObject.text }</div>
        </section>
    `
}