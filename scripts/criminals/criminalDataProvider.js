/*
We've been tasked to display the criminals in a more readable, usable,
sortable fashion. So first we need to get all the data on the 
criminals and store it in an array. We want to be able to use this
array - well really, a copy of it, not the original data. 

So, criminals holds the raw data that is the array of objects, telling
us all the lovely things that these lawbreakers have done.

Having that information just sit in this component would be silly,
so we export the function useCriminals, whose whole job is to return
a copy of the criminals array, which is what we use .slice() for.

But we still actually need that data to be able to send it elsewhere.
We're going to export a function called getCriminals. This function
returns the data that we fetch from the provided API. Since fetch()
always takes an unknown amt of time, we use .then() to give it a 
chance to go out, and then bring back the data. The first .then() takes
in the data using a param/placeholder/variable that we named response.
it then takes response and turns it from JSON to javaScript using
.json(). Then that usable javaScript data is passed into the next
.then() using the param/placeholder/variable criminalData, and we
update the value of criminals by setting it equal to the criminalData
param.

So in short. getCriminals goes to get the data, makes it javascript
friendly, pushes it into the criminal array, which then useCriminal
makes a copy of, and it's ready to be used, manipulated and otherwise
molded for our own purposes!

...back to main.js
*/

let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {

    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(criminalData => criminals = criminalData)

}
