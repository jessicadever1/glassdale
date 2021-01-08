/*
End goal: to display a dialog box with the known
associates of the criminals inside it.

First I'm going to make the box itself.
*/

import { useCriminals } from "./criminalDataProvider.js"

const eventHub = document.querySelector(".container")
const dialogPopUp = document.querySelector(".knownAssDialogBox")

eventHub.addEventListener("associateAlibiBtnClicked", event => {
    const associateId = event.detail.associateId[1];
    const criminals = useCriminals();
    const chosenCriminal = criminals.find(c => c.id === parseInt(associateId))
    
    openDialogAssociates(assPopUp(chosenCriminal))
    }
)

const assPopUp = (associate) => {
    return `
    <section class="associate-dialog">
        <div class="associate-dialog__body">
            <h2 class="dialogBoxH2">${associate.name}'s Known Associates</h2>
            <div class="assDialogBox">
                ${assCard(associate)}
            </div>
            <button id="closeDialog" class="closeDialog">Close</button>
        </div>
    </section>`
}

const assCard = (associate) => {
    return `
    <div class="ass-details__card">
        <div class="dialogBoxAssociateName">${associate.known_associates.map( (associate) => `
            <div class="alibiSpace">
                <div><strong>Name: </strong>${associate.name}</div>
                <div><strong>Alibi: </strong>${associate.alibi}</div>
            </div>
        `).join("")}
        </div>
    </div>
    `
}

const openDialogAssociates = (dialogHTML) => {
    dialogPopUp.innerHTML = dialogHTML;
    dialogPopUp.show()
}

eventHub.addEventListener("click", event => {
    if (event.target.id === 'closeDialog'){
        closeAssDialog();
    }
})

const closeAssDialog = (taco) => {
    dialogPopUp.innerHTML = taco;
    dialogPopUp.close();
}
