fetch('http://localhost:3000/stores/3')
//.then(r=>r.json())
.then((r)=>{
    console.log(r)
    if(r.ok){
        return r.json()
    }
    else{
        // Handle Error
        displayError()
    }
})
.then((stores)=>{
    console.log(stores)
})

const header = document.querySelector("header h1")
const button = document.createElement("button")
button.textContent = "Fetch Post"
header.append(button)
button.addEventListener('click',()=>{
    fetch('http://localhost:3000/new_route',{
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({
            test: "New Route 2"
        })
    })
    .then(r=>r.json())
    .then(data=>{
        console.log(data)
    })
})

function displayError(){
    header.textContent = "CANNOT FETCH"
}

