function carouselPreview() {
  const display = document.querySelector(".display");
  const next = document.querySelector(".next");
  next.addEventListener("click", nextImg);
  const prev = document.querySelector(".prev");
  prev.addEventListener("click", prevImg);

  //Initialize your images
  const one = document.createElement("img");
  one.src = "./Gamer_girl.png";
  const two = document.createElement("img");
  two.src = "./alien.jpg";
  const three = document.createElement("img");
  three.src = "./exotic.png";
  const four = document.createElement("img");
  four.src = "Beautiful.jpg";
  const five = document.createElement("img");
  five.src = "bridge.png";
  const six = document.querySelector(".homeImg");
  //Push them to an array
  const imageArray = [one, two, three, four, five, six];

  index = 0;

  function nextImg() {
    if (index === 5) {
      index = 0;
    } else {
      index++;
    }
    display.innerHTML = "";
    display.appendChild(imageArray[index]);
  }
  function prevImg() {
    if (index === 0) {
      index = imageArray.length - 1;
    } else {
      index--;
    }
    display.innerHTML = "";
    display.appendChild(imageArray[index]);
  }
  setInterval(() => {
    nextImg();
  }, 3000);
}
carouselPreview();
