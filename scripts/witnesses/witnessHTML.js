export const witnessesHTMLConverter = (witness) => {
    return `
    <section class="witnessCards">
        <div class="witnessCard--${witness.id}>
            <h2 class="witnessName><strong>Witness: </strong>${witness.name}</h2>
            <div class="witnessStatement"><strong>Statement: </strong>${witness.statements}</div>
        </div>
    </section>
    `
}