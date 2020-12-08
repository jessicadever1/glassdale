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