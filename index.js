// const imageArray = ['one', 'two','three' , 'four'];

const one = document.createElement('img')
one.src = './Gamer_girl.png'
const two = document.createElement('img')
two.src = './alien.jpg'
const three = document.createElement('img')
three.src = './exotic.png'
const four = document.createElement('img')
four.src = 'Beautiful.jpg'

const imageArray = [one, two, three, four];

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

    display.appendChild(imageArray[index]) /*imageArray[index]*/
}
