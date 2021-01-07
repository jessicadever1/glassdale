/*
End goal: to display a dialog box with the known
associates of the criminals inside it.

First I'm going to make the box itself.
*/

import { useCriminals } from "./criminalDataProvider"

const eventHub = document.querySelector(".container")
const dialogPopUp = document.querySelector(".knownAssDialogBox")

eventHub.addEventListener("associateAlibiBtnClicked", event => {
    const associateId = event.detail.associateId;
    const criminals = useCriminals();
    const chosenCriminal = criminals.find(c => c.id === associateId)
    
    openDialogAssociates(assPopUp(chosenCriminal))
    }
)

const assPopUp = (associate) => {
    return `
    <section class="associate-dialog">
        <div class="associate-dialog__body">
            <h2>Known Associates</h2>
            <div class="assDialogBox">
                ${assCard(associate)}
            </div>
        </div>
    </section>`
}

const assCard = (associate) => {
    return `
    <div class="ass-details__card">
        <div class="dialogBoxAssociateName">${associate.known_associates.name}</div>
        <div class="dialogBoxAssAlibi">${associate.known_associates.name}</div>
    </div>
    `
}

const openDialogAssociates = (dialogHTML) => {
    dialogPopUp.innerHTML = assPopUp(dialogHTML);
    dialogPopUp.show()
}
