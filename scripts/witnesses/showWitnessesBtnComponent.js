import { renderWitnesses } from './witnessList.js'
import { CriminalList } from '../criminals/criminalList.js'

const witnessBtnTarget = document.querySelector(".witnessBtn")
const eventHub = document.querySelector(".container")
//const witnessBtnUpdate = document.getElementById('witnessComeOn')


eventHub.addEventListener("click", clickEvent => {
    //const witnessBtnUpdate = document.getElementById("witnessId")
    //if (clickEvent.target.id === 'witnessBtn' && clickEvent.target.innerText != `Criminal Cards`) {
    if (clickEvent.target.innerText === `Witness Statements`) {
        hideCriminals();
        renderWitnesses();
        changeBtnTextToCrime()
        //witnessBtnUpdate.classList.add('hiddenCriminals');
    } 
})

const changeBtnTextToCrime = () => {
    const witnessBtnUpdate = document.getElementById("witnessBtn")
    witnessBtnUpdate.innerText = `Criminal Cards`
}

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.innerText === `Criminal Cards`) {
        CriminalList()
        hideWitnesses()
        // changeBtnTextToWit()
    }
})

// const changeBtnTextToWit = () => {
//     const witnessBtnUpdate = document.getElementById("witnessBtn")
//     witnessBtnUpdate.innerText = `Witness Statements`
// }

const hideWitnesses = () => {
    const witnessCardsTarget = document.querySelector(".witnessContainer")
    witnessCardsTarget.innerHTML = ``
    // const witnessBtnUpdate = document.getElementById("witnessBtn")
    // witnessBtnUpdate.innerText = `Witness Statements`
}

const hideCriminals = () => {
    const criminalTarget = document.querySelector(".criminalsContainer")
    criminalTarget.innerHTML = ``
}
// const hideCriminals = () => {
//     const contentTarget = document.querySelector(".criminalsContainer")
//     contentTarget.innerHTML = ``

// }

export const witnessBtn = () => {
    witnessBtnTarget.innerHTML = `
    <button id="witnessBtn">Witness Statements</button>
    `
}