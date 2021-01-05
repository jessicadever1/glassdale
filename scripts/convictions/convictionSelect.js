/*
 * Assignment notes: ConvictionSelect component that renders a select HTML element
 * which lists all convictions in the Glassdale PD API
 * 
 * Jess notes: 
 * We are building an option to select a specific crime, for sorting
 * purposes. So we need a list of the crimes. First we need to be
 * able to retrieve the data, which we've already built in Provider
 * and called it getConvictions. Then we need to put the javascript
 * data into a new array, which we've done with useConvictions. So
 * we import these two functions. 
 */
import { useConvictions, getConvictions } from "./convictionProvider.js"

/* Assignment notes: Get a reference to the DOM element where the 
<select> will be rendered.

Jess notes: So once we build out our select element, we'll need to
tell the server where we want it. So we reach into the document,
and then more specifically using the querySelector, tell it to 
search for the element that has the class of filters__crime. We need
to be able to reference that location, so we store it in a variable.
*/

const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".filters__crime")

/*

Now that we have a place for the select button to live on the page,
we need to build the select button, with all of the options. So step
one is to actually go and get the data. We've built the function that
does that in the Provider, so now we just have to call getConvictions.
Since this has the fetch feature in it, we need to give it the time
buffer of .then(). So once the getConvictions goes and fetches the 
data, converts it to JS and then makes it usable we want to put it
in an array. To make the array usable, we store it in a new variable
called convictions and use useConvictions to actually build this array.
Now that we have a list, and the list is in javascript, we need to
turn this list into HTML. We're going to build a function and store
it in a variable called render, to do that. 
*/

export const ConvictionSelect = () => {
    // Trigger fetching the API data and loading it into application state
    getConvictions()
    .then( () => {
      // Get all convictions from application state
      const convictions = useConvictions()
      render(convictions)
    })
}
/*

So we have a variable called contentTarget, that tells the DOM where
to put what we're pushing in it. And we're going to use innerHTML to
actually do the job of putting it there. The thing we're going to put
there is the HTML select button, and the options within it. Since
there are multiple options, we need to give the option tags values,
so that we can reference the specific value elsewhere. We provide 
the javascript data that is the value of a specific crime (like theft)
by looping through an array of crimes. AKA convictions. 
convictionsCollection is our parameter/placeholder/variable that 
accepts the variable convictions, which is the value of the function
useConvictions, which is the array of crimes. So we're looping through
that using .map(). We're calling each of the objects within the array
a crime, and using dot notation to get the (in this case) name. We're
then returning another option tag, that is loaded up with the name.
We used the value as the name also. So now render can be used up ^
there. Up there being the ConvictionSelect that does the work of
fetching the data, turning it into javascript, sprinkling it with
HTML and then putting it in a new array, that can then be displayed
on the page, and land where we told it to go.

*/


const render = convictionsCollection => {
    /*
        Use interpolation here to invoke the map() method on
        the convictionsCollection to generate the option elements.
        Look back at the example provided above.
    */
    
    contentTarget.innerHTML = `
        <select class="dropdown" id="crimeSelect">
            <option value="0">Please select a crime...</option>
            ${
                convictionsCollection.map(
                    (crime) => {
                        return `<option value="${crime.id}">${crime.name}</option>`
                    }
                )
            }
        </select>
    `
}

/* 

Above, we added in a const called eventHub, to 
be a commonplace of exchanging info. We used
document.qS to locate the page, and the main
element, using it's class of container.

Now we need to tell it to listen for something to
happen, knowing that eventHub is listen for 
a change to happen to it, or to it's children
elements.

*/

eventHub.addEventListener("change", event => {
    //We want it to do the following, only if the
    //'crimeSlect' element was changed
    if (event.target.id === "crimeSelect") {
        //create custom event
        const customEvent = new CustomEvent("crimeChosen", {
            detail: {
                crimeThatWasChosen: event.target.value
            }
        })

        eventHub.dispatchEvent(customEvent)
    }

})