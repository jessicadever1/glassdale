import {useWitnesses, getWitnesses} from './witnessDataProvider.js'
import { witnessesHTMLConverter } from './witnessHTML.js'

const eventHub = document.querySelector(".container")
const witnessPlacement = document.querySelector(".criminalsContainer")

let witnessCards = []

export const renderWitnesses = () => {
    getWitnesses().then( () => {
        let witnesses = useWitnesses()
        for (const witness of witnesses) {
            witnessCards.push(witnessesHTMLConverter(witness))
        }
        witnessPlacement.innerHTML += witnessCards.join("")
    })
}