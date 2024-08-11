let sliderInput = document.querySelector(".slider__input")
let sliderImg = document.querySelector(".slider__image")

function biggerImg(){
    let currentRange = sliderInput.value / 100
    sliderImg.style.transform = `scale(${currentRange})`
}
let newImg = _.debounce(biggerImg, 100)
sliderInput.addEventListener("input", newImg)



let box = document.getElementById("box")

function moveBlock(event){
    let x = event.offsetX
    let y = event.offsetY

    box.style.transform = `translate(${x}px, ${y}px)`
}
let newBox = _.debounce(moveBlock, 100)
window.addEventListener("mousemove", newBox)