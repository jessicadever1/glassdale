import { useMessages } from "./MessageProvider.js"
import { Message } from "./Message.js"

const contentTarget = document.querySelector(".messages")
const eventHub = document.querySelector(".container")
/*
    COMPONENT FUNCTION
*/
export const MessageList = () => {
    const allMessages = useMessages()
    render(allMessages)
}

/*
    RENDERING FUNCTION
*/
const render = messageArray => {
    const convertedMessages = messageArray.map(messageObject => {
        const messageHTML = Message(messageObject)
        return messageHTML
    })
    const combinedSections = convertedMessages.join("")
    contentTarget.innerHTML = combinedSections
}

/*
    Color the messages when one of the buttons in the ThemeButtons
    component is clicked.
*/
eventHub.addEventListener("colorChosen", event => {
    const color = event.detail.color

    contentTarget.classList = []
    contentTarget.classList.add(color)
})

/*
e is the object being passed in (it's the placeholder/
/parameter/variable)

.target is... telling us which thing we've clicked on

.id is... reading the id we've given a button

in summary, it's saying give me the id of the event
(button) that was clicked on

the listener is on the div, but it's acting on one of
it's child elements, this is called bubbling. This
is because we're adding buttons within the div, but
letting the div listen to any of those buttons.

into the if statement...

we're using our variable to see what the id starts with.
we're using split to deconstruct the id. we're 
splitting it at the --, and then we're changing the
class to whichever button color we've indicated. At
the same time, the CSS is listening to which class
the element has, and returning the preset color.

*/