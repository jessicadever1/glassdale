import { renderWitnesses } from './witnessList.js'

const witnessBtnTarget = document.querySelector(".witnessBtn")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("click", clickEvent => {
    if (clickEvent.target.id === 'witnessBtn') {
        renderWitnesses()
        hideCriminals()
    }
})

const hideCriminals = () => {
    const contentTarget = document.querySelector(".criminalsContainer")
    contentTarget.innerHTML = ``
}

export const witnessBtn = () => {
    witnessBtnTarget.innerHTML = `
    <button id="witnessBtn">Witness Statements</button>
    `
}