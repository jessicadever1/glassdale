import { useCriminals, getCriminals } from './criminalDataProvider.js'
import { criminals } from './criminal.js'

const contentElement = document.querySelector(".criminalsContainer")
let criminalCards = []

export const criminalList = () => {
    getCriminals().then( () => {
            let perps = useCriminals()

            for (const perp of perps) {
                criminalCards.push(criminals(perp))
            }
            contentElement.innerHTML = criminalCards.join("")
        }
       
    ) 
}


/*
const contentElement = document.querySelector(".criminalsContainer")
const usedCriminal = useCriminals()

for (const criminalObject of usedCriminal) {
            const criminalHTML = criminals(criminalObject)
            contentElement.innerHTML += criminalHTML
        } */

        // const criminalHTML = criminals(peram)
        //     contentElement.innerHTML += criminalHTML