import { dogs } from './data.js';
import { Dog } from './Dog.js';



let currentDogIndex = 0;
let currentDog = new Dog(dogs[currentDogIndex]);

const crossicon = document.getElementById('cross-icon');
const hearticon = document.getElementById('heart-icon');

crossicon.addEventListener('click', function () {
  document.getElementById('badgenope').style.display = 'block';
  setTimeout(getnewDog, 2000); // Delay of 2 seconds (2000 milliseconds)
});

hearticon.addEventListener('click', function () {
  document.getElementById('badgelike').style.display = 'block';
  setTimeout(getnewDog, 2000); // Delay of 2 seconds (2000 milliseconds)
});

function getnewDog() {
  document.getElementById('badgelike').style.display = 'none';
  document.getElementById('badgenope').style.display = 'none';
  
  currentDogIndex++;

  if (currentDogIndex < dogs.length) {
    currentDog = new Dog(dogs[currentDogIndex]);
    render();
  } else {
    // If there are no more dogs, reset to the first dog
  document.getElementById('all-data').innerHTML = `<div id='last-text' class='last-text'> See you next time  </div>`
    
  }
}

function render() {
  const getdata = document.getElementById('main-data');
  getdata.innerHTML = currentDog.getHtml();
}

render()
