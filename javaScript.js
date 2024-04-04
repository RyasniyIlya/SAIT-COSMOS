const sliderBox = document.querySelector(".slaider")
const slideElement = document.querySelectorAll(".slaider__slide")
let color = ['#320b0bb7','#28456db7','#4089efb7','#847d1cb7' ]
let checkIndex = 0
function showSliderElement(Index){
    sliderBox.style.transform = `translateX(-${Index*100}%)`;
    /* эт фyнкция  премещает слайды в лево с помощью трансформа для елемента слайдера где в середине 
    каждий елемент двигаеться на 100 проц ширины слайда
    */
}

function toSlide(index){
    checkIndex = index
    showSliderElement(checkIndex)
    document.body.style.backgroundColor = color[checkIndex]
}

function goNextSlide(){
/*     slideElement[checkIndex].classList.remove("new") */
    checkIndex = (checkIndex + 1) % slideElement.length
/*     slideElement[checkIndex].classList.add("new") */
    showSliderElement(checkIndex)
}

function goPrevSlide(){
/*     slideElement[checkIndex].classList.remove("new") */
        checkIndex = (checkIndex - 1 + slideElement.length) % slideElement.length
/*     slideElement[checkIndex].classList.add("new") */
    showSliderElement(checkIndex)
    }

/* Ці функціі змінюють наш checkIndex (0), для того, щоб відобразити 
наступний/попередній слайд */

showSliderElement(checkIndex)
let firstSlide = document.querySelector(".slaider__dodts-group-elemets1")
let secondSlide = document.querySelector(".slaider__dodts-group-elemets2")
let thirdSlide = document.querySelector(".slaider__dodts-group-elemets3")
let fourSlide = document.querySelector(".slaider__dodts-group-elemets4")

firstSlide.addEventListener("click", function(){
    toSlide(0)
})

secondSlide.addEventListener("click", function(){
    toSlide(1)
})

thirdSlide.addEventListener("click", function(){
    toSlide(2)
})

fourSlide.addEventListener("click", function(){
    toSlide(3)
})


