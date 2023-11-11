const colors = [
  '#FF0000', // Red
  '#00FF00', // Green
  '#0000FF', // Blue
  '#FFFF00', // Yellow
  '#FF00FF', // Magenta
  '#00FFFF', // Cyan
  '#FF4500', // OrangeRed
  '#8A2BE2', // BlueViolet
  '#228B22', // ForestGreen
  '#DAA520', // GoldenRod
  '#2E8B57', // SeaGreen
  '#800080', // Purple
  '#A52A2A', // Brown
  '#808080', // Gray
  '#000000', // Black
  '#FF8C00', // DarkOrange
  '#8B0000', // DarkRed
  '#483D8B', // DarkSlateBlue
  '#20B2AA', // LightSeaGreen
  '#CD853F', // Peru
  '#B0E0E6', // PowderBlue
  '#8B4513', // SaddleBrown
  '#6A5ACD', // SlateBlue
  '#556B2F', // DarkOliveGreen
  '#4B0082', // Indigo
];


const sizeSlider = document.querySelector('#sizeSlider');
const gridInfo = document.querySelector('#gridInfo');
const colorGrid = document.querySelector('.color-grid');
const btn = document.querySelectorAll('button');
let userGrid = document.createElement("div");
let colorChoice = document.getElementById('colorChoice');



generateDivs(256);


let btnArray = Array.from(btn).slice(0, btn.length - 1);



let previousButton = null;
 
btnArray.forEach((button, index) => {
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

    let divGrid = document.querySelectorAll('.divGrid');

    if(index == 0) {

      Array.from(divGrid).forEach(div => {
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = `${colorChoice.value}`;
        })
      }) 
    } else if (index == 1) {
      Array.from(divGrid).forEach(div => {
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = `${randomColor(colors)}`
        })
      })
    } else if (index == 2){
      Array.from(divGrid).forEach(div => {
        div.addEventListener('mouseover', () => {
          div.style.backgroundColor = '';
        })
      })
    }
    
  });
});

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

//Erase Sketch board
const clearBtn = document.getElementById('clearBtn');

clearBtn.addEventListener('click', () => {
  let divGrid = document.querySelectorAll('.divGrid');
  Array.from(divGrid).forEach(div => {
    Math.max(div.style.backgroundColor = '');
  })
})

const rainbowMode = document.getElementById('rainbowMode');




function randomColor(colors) {
  const randomIndex = Math.floor(Math.random() * colors.length);
  return colors[randomIndex];
}




//Color Mode

