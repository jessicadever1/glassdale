/*
We need to get a working list together of crimes. A list is an 
array, so we declare a variable whose value is an array.
*/

let convictions = []

/*
Since we never want to manipluate the array itself, it's best practice
to make a copy, and use that to manipulate. So we declare a variable,
whose value is a function that uses .slice() to take a copy of the 
entire convictions array. Then we send that to other places using
export.
*/

export const useConvictions = () => convictions.slice()

/* 
In order to build said list (array), we need to either manually build
a list, or get the list items from somwhere. We have been provided
with an API... which is a fancy thing that holds the kind of info that
we want. But we need to make this info useable. So first, we get the
info from the API using fetch. The info is currently living at the URL
within the fetch peren's. So fetch goes to that URL, and brings back
that info. Since it takes time to do this, we give ourselves some
leeway, by adding a .then(). Once the info is fetched, the first
.then will turn the info that is in JSON and turn it into javascript.
So now we have some javascript data to work with. The next .then()
takes that data in a variable/perameter and the thing we're doing
with it, is storing that data in the convictions array. Since we'll
be fetching this data elsewhere, we export it.
*/

export const getConvictions = () => {

    return fetch("https://criminals.glassdale.us/crimes")
        .then(response => response.json())
        .then(convictionData => convictions = convictionData)

}