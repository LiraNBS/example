console.log("js file connected")

const title = document.querySelector("h1")
const words = document.querySelector(".words")
const colors = document.querySelector(".colors")


words.addEventListener ('click', function(){
    title.textContent += " Blah"
})


colors.addEventListener ('click', function(){
    title.style.color = title.style.color =="red" ? "black" : "red"
})