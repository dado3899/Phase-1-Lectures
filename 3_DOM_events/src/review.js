// Array manipulation
const test_array = [1,2,3,4,5]
// push, pop
test_array.push(6)
console.log(test_array)
const return_pop = test_array.pop()
console.log(return_pop)
console.log(test_array)
// unshift, shift
test_array.unshift(0)
console.log(test_array)
const return_shift = test_array.shift()
console.log(return_shift)
console.log(test_array)
// slice, splice
console.log(test_array.slice(2,4))
console.log(test_array.splice(2,4))
console.log(test_array)

// Query Selectors

// console.log(document.querySelector("#book-list h1 div h2"))
console.log(document.getElementById("form-title"))
const nested_h2 = document.querySelector("#book-list h1 div h2")
nested_h2.textContent = "Review"
nested_h2.id = "unique_id"

const img = document.createElement("img")
img.src = "https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDIzLTA4L3Jhd3BpeGVsX29mZmljZV8xMl9waG90b19vZl9nb2xkZW5fcmV0cmlldmVyX3B1cHB5X2p1bXBpbmdfaXNvbF83MTM2NGE2OS1kZTM0LTQzMWEtYWRkZS04ZTdmZWQ0ZGFiOTIucG5n.png"
nested_h2.append(img)