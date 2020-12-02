export const criminals = (person) => {
    return `
        <section class="criminal_container">
        <div class="criminal_name"><h2>${person.name}</h2></div>
            <div class="criminal_age">Age: ${person.age}</div>
            <div class="criminal_crime">Crime: ${person.conviction}</div>
            <div class="criminal_date_of_incarceration">Start Date: ${new Date(person.incarceration.start).toLocaleDateString('en-US')}</div>
            <div class="criminal_end_date_of_incarceration">End Date: ${new Date(person.incarceration.end).toLocaleDateString('en-US')}</div>
        </section>
    `
}
