const obj = {
    a: {
        b: [{
            c: "Hi"
        },{}]
    }
}
obj["anything"] = "something"
obj.another = "Another thing"
console.log(obj.a.b[0]["c"])
for (key in obj){
    // console.log(obj[key])
}

document.addEventListener('DOMContentLoaded',()=>{
    // console.log("Dom loaded")
    const body = document.querySelector('body')
    const button = document.createElement('button')
    button.textContent = "Dark Mode"
    body.append(button)
    button.addEventListener('click', ()=>{
        if (body.className == 'dark-mode'){
            body.className = "light-mode"
        }
        else{
            body.className = "dark-mode"
        }
    })

    
    

})


