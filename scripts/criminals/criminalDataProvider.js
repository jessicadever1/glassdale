let criminals = []

export const useCriminals = () => criminals.slice()

export const getCriminals = () => {

    return fetch("https://criminals.glassdale.us/criminals")
        .then(response => response.json())
        .then(criminalData => {
                console.table(criminalData)
                criminals = criminalData
            }
        )
}