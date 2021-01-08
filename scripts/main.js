//using localhost 8088 to serve json//

import { CriminalList } from './criminals/criminalList.js'
CriminalList()

import { ConvictionSelect } from './convictions/convictionSelect.js'
ConvictionSelect()

import { officerSelect } from './officers/officerSelect.js'
officerSelect()

import { NoteForm } from './notes/noteForm.js'
NoteForm()

import { ShowNoteButton } from './notes/showNotesButton.js'
ShowNoteButton()

import "./notes/notesList.js"
import "./criminals/knownAssociates.js"

/*
What are we trying to do today?

On 12/4/20 - we're trying to filter our criminals
by the crime they committed. 


What tasks do we need to complete, to implement
the feature?
    filter through the criminals data by matching
    the crime that was selected

    1. Listen for the selection of a crime and 
       capture the chosen value
    2. Use the selected value to filter the 
       criminal data
    3. Update the DOM with the filtered criminal
       data

Which modules are involved?
CriminalList updates the DOM with the filtered 
    criminal data

ConvictionSelect 


On 12/7/20 - we're working on adding the officers,
and being able to sort by the arresting officer

1. Import allllll of the officers
   -this will be in dataProvider
2. Get officers to populate on the page in HTML
3. Be able to select an officer, and populate the
criminals that they have selected.
*/

/* THE ULTIMATE RECAP... as of 12.10.20!

Chpt 1:
We were giving the task of making a police dpt's job easier
by being able to more efficiently display, and sort key 
information.

From the get-go, we knew that we had a pool of data all ready
to be mined. So we created an API directory.

We knew that we had loads of data on the criminals themselves,
so we made a directory for them.

It was communicated that we need to be able to sort the data
by past offenses because past offenders are often most likely
to be repeat offenders. So we needed a directory to handle 
convictions.

It may prove to be handy to be able to sort through officers,
so we're also making a directory to handle all of their info.

Of course we like to make things pretty, so CSS is also added.

We were given an HTML boilerplate. It is all set up to link to
our CSS in the head tags. It also has a script tag in the body
to link it to the main.js. 

Chpt 2:
We've been told an API was built by some interns, and so now
we're given the task of using the API data.

The first data we access is the officer info. THis is in the 
officier directory, and specifically, the officer Provider...

We've got that all set, so now we move on to the criminals.

We're first tasked with pulling data from the API, and displaying
all of the criminals in a grid format. Specifcally, their names,
age, conviction(crime), and start and end dates of their
incarceration are requested. 

Based on past experience, we know that we're going to need to get
the data from the API. So we'll go collect that in the Criminal
Provider. 

...go to Provider...

We know we want it to display in a pretty format that can be
bedazzled with CSS, so first it needs to be converted into HTML.
Historically that has lived in a component that, in this case,
would be called criminal.js. And that is a function that just
returns a string of HTML.

...go to criminal.js...

Then we need to also be able to LIST it out on the page to be 
displayed to the "user." Historically, the dataProvider and 
criminal.js feed into the List component, which then feeds into
the main.js. 

Then we did import getCriminals and useCriminals... but event-
ually scrapped that for some eventListeners...

Chpt 3:
In this chapter we're beginning the process of filtering the
criminals by the type of crimes they've committed. We want to be
able to use a dropdown button to list out all of the crimes, so
that the user can select a crime, and (eventually) when they do, it
will list out which criminals committed that crime.

We create two new components. The first being the ConvictionProvider,
the second being the ConvictionSelect.

Starting with the provider. We've got to get the data about convictions
from our API. 

...for details, go to conviction provider...

Then we build our select element within the ConvictionSelect.js. Since
we need BOTH the data and the copy of the data itself, we import both
the getConvictions and the useConvictions from the provider.

Chpt 5:

*/