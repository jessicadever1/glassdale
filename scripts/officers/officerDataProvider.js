/*

Today we are going to start working with the 
officer data. So the first thing that we need 
to do is gain access to the data. We'll use 
.fetch to get it from the API. Then make it
available to be used elsewhere. We'll do that
using an export.

I verified that I was able to get officers
by console.table-ing them.

*/

let officerCollection = []

export const useOfficers = () => {
    return officerCollection.slice()
}

export const getOfficers = () => {
   return fetch("https://criminals.glassdale.us/officers")
        .then(response => response.json())
        .then(officerData => {
            console.table(officerData)
            officerCollection = officerData
        })

}