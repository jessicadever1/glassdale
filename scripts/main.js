import { CriminalList } from './criminals/criminalList.js'
CriminalList()


import { ConvictionSelect } from './convictions/convictionSelect.js'
ConvictionSelect()

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
*/