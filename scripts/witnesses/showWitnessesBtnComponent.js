import { renderWitnesses } from './witnessList.js'
import { CriminalList } from '../criminals/criminalList.js'
import { getCriminals } from '../criminals/criminalDataProvider.js'

const witnessBtnTarget = document.querySelector(".witnessBtn")
const eventHub = document.querySelector(".container")
//const witnessBtnUpdate = document.getElementById('witnessComeOn')


eventHub.addEventListener("click", clickEvent => {

    if (clickEvent.target.innerText === `Witness Statements`) {
        hideCriminals();
        renderWitnesses();
        changeBtnTextToCrime()
    } 
})

const changeBtnTextToCrime = () => {
    const witnessBtnUpdate = document.getElementById("witnessBtn")
    witnessBtnUpdate.innerText = `Criminal Cards`
}

const changeBtnTextToWit = () => {
    const witnessBtnUpdate = document.getElementById("witnessBtn")
    witnessBtnUpdate.innerText = `Witness Statements`
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.innerText === `Criminal Cards`) {
        hideWitnesses()
    }
})

const hideWitnesses = () => {
    const witnessCardsTarget = document.querySelector(".witnessContainer")
    witnessCardsTarget.innerHTML = ``
}

const hideCriminals = () => {
    const criminalTarget = document.querySelector(".criminalsContainer")
    criminalTarget.innerHTML = ``
}

export const witnessBtn = () => {
    witnessBtnTarget.innerHTML = `
    <button id="witnessBtn">Witness Statements</button>
    `
}