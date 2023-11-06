document.addEventListener('DOMContentLoaded', () => {
    //Create = POST
    const userVar = {
        username: "CHANGED",
        extra: "Extraval"
    }
    // fetch("http://localhost:3000/users",{
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(userVar)
    // })
    // .then(r => r.json())
    // .then(user => console.log(user))
    //Read = GET

    fetch("http://localhost:3000/stores")
    .then(r => r.json())
    .then(stores => console.log(stores))
    // .then(stores => console.log(stores))


    //Update = PATCH
    // fetch("http://localhost:3000/users/1",{
    //     method: "PATCH",
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify(userVar)
    // })
    // .then(r => r.json())
    // .then(data => console.log(data))
    //Delete = DELETE
    // fetch("http://localhost:3000/users/2",{
    //     method: "DELETE"
    // })
})