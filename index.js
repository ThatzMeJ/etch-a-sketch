const sizeSlider = document.querySelector('#sizeSlider');
const gridInfo = document.querySelector('#gridInfo');
const colorGrid = document.querySelector('.color-grid');
const btn = document.querySelectorAll('button');
let userGrid = document.createElement("div");

generateDivs(256);

//Display the grid squares inside the grid
gridInfo.textContent = `${sizeSlider.value} x ${sizeSlider.value}`;


sizeSlider.addEventListener('input', (event) => {
  let numberOfDivs = event.target.value * event.target.value;
   generateDivs(numberOfDivs);
   colorGrid.style.gridTemplateColumns = `repeat(${event.target.value}, 1fr)`;
   colorGrid.style.gridTemplateRows = `repeat(${event.target.value}, 1fr)`;
})

function generateDivs(num) {
  colorGrid.innerHTML = '';

  for (let i = 0; i < num; i++) {
    const div = document.createElement('div');
    div.classList.add('divGrid');
    colorGrid.appendChild(div);
  }
}

sizeSlider.addEventListener('input', function() {
  let value = sizeSlider.value;
  gridInfo.textContent = `${value} x ${value}`;
});


let btnArray = Array.from(btn).slice(0, btn.length - 1);


let previousButton = null;
 
btnArray.forEach(button => {
  button.addEventListener('click', () => {
    // Check if there was a previously clicked button
    if (previousButton) {
      // Restore the styles of the previous button
      previousButton.style.background = ''; // Restore the original background
      previousButton.style.color = '';      // Restore the original text color
    }
   
    // Apply new styles to the clicked button
    button.style.background = '#333';
    button.style.color = 'white';

    // Set the current button as the previousButton
    previousButton = button;
  });
});

//Color Mode
if(btnArray[0].style.background = 'rgb(51, 51, 51)') {
  console.log('cock');
}
