import { renderWitnesses } from './witnessList.js'
import { CriminalList } from '../criminals/criminalList.js'

const witnessBtnTarget = document.querySelector(".witnessBtn")
const eventHub = document.querySelector(".container")


eventHub.addEventListener("click", clickEvent => {
    const witnessBtnUpdate = document.getElementById("witnessBtn")
    if (clickEvent.target.id === 'witnessBtn') {
        renderWitnesses()
        hideCriminals()
        witnessBtnUpdate.classList.add("hiddenCriminals")
    } 
})

eventHub.addEventListener("click", clickEvent => {
    if ($(button).clickEvent hasClass(hiddenCriminals)) {
        hideWitnesses()
        // CriminalList()
    }
})

const hideWitnesses = () => {
    const witnessCardsTarget = document.querySelector(".criminalsContainer")
    witnessCardsTarget.innerHTML = ``
}

const hideCriminals = () => {
    const contentTarget = document.querySelector(".criminalsContainer")
    contentTarget.innerHTML = ``
    const witnessBtnUpdate = document.getElementById("witnessBtn")
    witnessBtnUpdate.innerText = `Criminal Cards`
}

export const witnessBtn = () => {
    witnessBtnTarget.innerHTML = `
    <button id="witnessBtn">Witness Statements</button>
    `
}