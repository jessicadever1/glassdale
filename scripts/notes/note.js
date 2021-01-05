export const NoteHTMLConverter = (noteObject, criminalObject) => {
    return `
        <section class="note">
            <div class="note__timestamp"><strong>Date: </strong>${ new Date(noteObject.timestamp).toLocaleDateString('en-US')  }</div>
            <div class="note__author"><strong>Author: </strong>${ noteObject.author }</div>
            <div class="note__title"><strong>Suspect: </strong>${ criminalObject.name }</div>
            <div class="note__text">${ noteObject.text }</div>
        </section>
    `
}

/*
TO DO:
change input to select of specific criminals

1. make a select element and populate it with all of the criminals
    1a. use a fetch call to go and get the list of criminals
2. changing the HTML representation of our form.
3. add an eventListener to listen for the dropdown being selected
4. change how the note is saved to capture the criminalId
5. change how the note objects are represented when displayed on page

Modules to change:
    noteForm
    note
    noteList
    notes.json
*/ 