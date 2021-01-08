/*
...picking up from chpt 2, our job in this component is to take any
data we're given and convert it into HTML.

Since that is the ONLY job this badboy has, we know that we need to
share it with others, so we export the function that does the job
of returning a string of HTML.

We make sure this function accepts one param/placeholder/variable.

We make sure the stinking thing RETURNS (mostly kidding on the tone
    but really, return you're so needy.)

We use interpolation to populate the name, age, conviction and dates
within the tags.

So the param accepts an object. And that object has keys of name
age, conviction, and dates.

The date() and toLocaleDateString() are new to me, so let's see what
google has to say about them...

...so date() with no arguement will return the number of milliseconds
that have elapsed since midnight jan 1, 1970. oh boy. trying to figure
out how 'new' plays into it... so new is an operator that lets devs
create an instance of a user-defined object type. Hm. That's confusing.
What is it's necessity? just to create a one time thing? without it
what would be created? So asked around a bit, and googled, but haven't
totally nailed down the importance/ necessity of new.

Right from w3schools: The toLocaleDateString() method converts the 
date (not the time) of a Date object into a readable string, using 
locale conventions.

...back to main.js...
*/

const eventHub = document.querySelector(".container")

export const criminals = (person, facilities) => {
    return `
        <section class="criminal_container">
        <div class="criminal_name"><h2>${person.name}</h2></div>
            <div class="criminal_age">Age: ${person.age}</div>
            <div class="criminal_crime">Crime: ${person.conviction}</div>
            <div class="criminal_date_of_incarceration">Start Date: ${new Date(person.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal_end_date_of_incarceration">End Date: ${new Date(person.incarceration.end).toLocaleDateString('en-US')}</div>
            <button class="assAlBtn" id="associates--${person.id}">Associate Alibis</button>
            </section>
            `
}

eventHub.addEventListener("click", event => {
    if (event.target.id.startsWith("associates--")) {
        const secondHalfOfId = event.target.id.split("--")
        const customEvent = new CustomEvent("associateAlibiBtnClicked", {
            detail: {
                associateId: secondHalfOfId
            }
        })
    eventHub.dispatchEvent(customEvent)    
    }
})



            // <div>
            //     <h2>Facilities</h2>
            //     <ul>
            //         ${facilities.map(f => `<li>${f.facilityName}</li>`).join("")}
            //     </ul>
            // </div>