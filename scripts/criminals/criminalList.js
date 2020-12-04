/*The point of this page is to use the list (array) that we've made in
the Data Provider, and make it so it has the HTML on it that we made in 
the criminal.js page. So first we need to import the array, the function
that calls the data from the API (to make sure we have the data), the
code needed to put HTML on it.
*/

import { useCriminals, getCriminals } from './criminalDataProvider.js'
import { criminals } from './criminal.js'
import { useConvictions } from '../convictions/convictionProvider.js'

/* Then we need to tell the server WHERE on the page we want this
HTML-ed code. We store this location in a variable, so we can use it
down the road. We use document to say hey! Go to the index.html
and put it there, and then more specifically, use the querySelector
to say, but at this particular spot on this document.*/

const contentElement = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

/* Now that we have data, and the data is workable javascript, and we
know where we want this workable javascript data to go, we need to
store it in an array. This array, will now have the data, the javascript
AND the HTML, ready to get displayed on the page when called.
 */


//let criminalCards = []

/* Now that we have a place for the HTML Javascript data to go, we 
need it to actually get turned into the HTML. So first we declare
a new variable that is a function to do this. We get the data from
the getCriminals funciton. Since this has a fetch on it, we need
a way to buy the server time to go retrieve the data, so we attach
a .then() loop to it. In order to be able to go through the crim-
inals one by one, we have to itterate over it. So we put that array
in a variable called perps, so that we can itterate over it. We use
for loop to itterate. We take the object from the array, sprinkle
the HTML over it with criminals(), while pushing this to our new
array that holds the fancy HTML Javascript data.  By using the join(),
it lets us make the values in the array a string. Which is more read-
able.*/

// export const criminalList = () => {
//     getCriminals().then( () => {
//             let perps = useCriminals()

//             for (const perp of perps) {
//                 criminalCards.push(criminals(perp))
//             }
//             contentElement.innerHTML = criminalCards.join("")
//         }
       
//     ) 
// }

/* 
We've created a new location above, known as
eventHub. This is the main tag. We got this 
location by directing it first to the document,
then to the class of main using qS. We've stored
this location in the variable eventHub.

Now we need to tell the eventHub what to listen
for.
*/

eventHub.addEventListener("crimeChosen", event => {
    if (event.detail.crimeThatWasChosen !== "0") {
        
        const crimes = useConvictions()
        const crime = crimes.find((crime) => crime.id === parseInt(event.detail.crimeThatWasChosen))
        
        const currentCriminals = useCriminals()
        const matchingCriminals = currentCriminals.filter((currentCriminal) => { 
                return currentCriminal.conviction === crime.name })
        render(matchingCriminals)
        }
    
})

const render = (moreCriminals) => {
    let criminalCards = []
    for (const perp of moreCriminals) {
        criminalCards.push(criminals(perp))
    }
    contentElement.innerHTML = criminalCards.join("")
}


// Render ALL criminals initally
export const CriminalList = () => {
    getCriminals().then(() => {
        let perps = useCriminals()
        render(perps)
        })
}