
//Initialize your images
const one = document.createElement('img')
one.src = './Gamer_girl.png'
const two = document.createElement('img')
two.src = './alien.jpg'
const three = document.createElement('img')
three.src = './exotic.png'
const four = document.createElement('img')
four.src = 'Beautiful.jpg'
const five = document.createElement('img')
five.src = 'bridge.png'
//Push them to an array
const imageArray = [one, two, three, four, five];

const display = document.querySelector('.display');
const next = document.querySelector('.next');
next.addEventListener('click', nextImg);
const prev = document.querySelector('.prev');
prev.addEventListener('click', prevImg);
index = 0;

function nextImg(){
    if (index === 4) {
        index = 0
    } else {
       index++  
    }
    display.innerHTML = ''
    display.appendChild(imageArray[index]) 
    console.log(index)

}
function prevImg() {
    if (index === 0) {
        index = imageArray.length - 1
    console.log(imageArray.length)

    }
    else{
        index --
    }
    display.innerHTML = ''
    display.appendChild(imageArray[index])
    console.log(index)
}
