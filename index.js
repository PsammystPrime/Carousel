const imageArray = ['one', 'two','three' , 'four'];

index = 0
const next = document.querySelector('.next')
const display = document.querySelector('.display')
next.addEventListener('click', nextImg)

function nextImg(){
    if (index===3) {
        index = 0
    } else {
       index++  
    }

    display.textContent = index
}
