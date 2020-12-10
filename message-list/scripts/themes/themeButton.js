const eventHub = document.querySelector(".container")
const contentTarget = document.querySelector(".themes")

// Listen for browser generated click event in this component
eventHub.addEventListener("click", clickEvent => {

    // Make sure it was one of the color buttons
    if (clickEvent.target.id.startsWith("btnTheme--")) {

        // Get the chosen color
        const [prefix, chosenColor] = clickEvent.target.id.split("--")

        /*
            Create a new custom event, with a good name, and
            add a property to the `detail` object that specifies
            which color was chosen
        */
        const colorChosenEvent = new CustomEvent("colorChosen", {
            detail: {
                color: chosenColor
            }
        })

        eventHub.dispatchEvent(colorChosenEvent)
    }
})


/*
The eventHub is a mediator between themeButton &
messageList components. Right now, the event hub is
container in index.html (main tag).

the eventlistener is listening for a click.
we're making sure that what was clicked on 
one of the buttons with our if statement. Then
we'll split the id, so we can target them individually
and give it something to do.

We're going to make our own event. We are defining
a CustomEvent called "colorChosen". CustomEvent
has two parameters, the second being an object. We're
going to add the property of our chosenColor. 
colorChosen did come from what we targeted on the 
.id.split(). but the first parameter is just a param, ie
it doesn't matter whta it's named.


THen we're going to broadcast the event.

*/




export const ThemeButtons = () => {
    contentTarget.innerHTML = `
        <button class="btnTheme" id="btnTheme--red">Red</button>
        <button class="btnTheme" id="btnTheme--purple">Purple</button>
        <button class="btnTheme" id="btnTheme--blue">Blue</button>
        <button class="btnTheme" id="btnTheme--green">Green</button>
    `
}