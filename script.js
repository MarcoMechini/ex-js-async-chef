// In questo esercizio, utilizzerai async/await per creare la funzione getChefBirthday(id). Questa funzione accetta un id di una ricetta e deve:
// Recuperare la ricetta da https://dummyjson.com/recipes/{id}
// Estrarre la proprietà userId dalla ricetta
// Usare userId per ottenere le informazioni dello chef da https://dummyjson.com/users/{userId}
// Restituire la data di nascita dello chef

async function fetchJson(url) {
    const resp = await fetch(url)
    const obj = await resp.json()
    return obj
}

async function getChefBirthday(id) {
    let ricetta;
    try {
        ricetta = await fetchJson(`https://dummyjson.com/recipes/${id}`)
    } catch (error) {
        throw new Error(`non posso recuperare post id ${id}`);
    }

    if (ricetta.message) throw new Error(ricetta.message)


    let chef;
    try {
        chef = await fetchJson(`https://dummyjson.com/users/${ricetta.userId}`)
    } catch (error) {
        throw new Error(`non posso recuperare user id ${ricetta.userId}`);
    }
    if (chef.message) throw new Error(chef.message)


    return chef.birthDate


}

(async () => {
    try {
        const birthday = await getChefBirthday(1)
        console.log(birthday);
    } catch (error) {
        console.error(error);
    }
})()

// getChefBirthday(1)
//     .then(birthday => console.log('Data di nascita dello chef:', birthday))
//     .catch(error => console.error(error))