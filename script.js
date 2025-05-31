const container = document.getElementById('grid-container');
let userEntry;


createGrid(16*16);

const button = document.getElementById('grid-create');
button.addEventListener('click', () => {
  const size = getUserEntry();
  if (size !== null) {
    createGrid(size * size);
  }
});

function getUserEntry() {
  userEntry = prompt ("What is the grid size you want to create? (Maximum 100)");
  userEntry = parseInt(userEntry);
   if (userEntry > 100 || userEntry < 0) {
  alert ("Number must be greater than 0 and less than 100");
  return null;
 }else if (isNaN(userEntry)){
    alert ("Input must be a number");
    return null;
  } else {
    return userEntry;
  }

}

function getRandomColor() {
let r = Math.floor(Math.random() * 256); // Random between 0-255
let g = Math.floor(Math.random() * 256); // Random between 0-255
let b = Math.floor(Math.random() * 256); // Random between 0-255
return 'rgb(' + r + ',' + g + ',' + b + ')';
}

  const clear = document.getElementById('clear'); //clear button
  clear.addEventListener('click', () => {
  createGrid(16 * 16);
});


function createGrid(numberOfItems) {
  container.innerHTML = " ";
  const columns = Math.sqrt(numberOfItems);
for (let i = 0; i < numberOfItems; i++) {
  const item = document.createElement('div');
 
  item.classList.add('grid-item');
  item.dataset.opacity = 0; // Initialize opacity as 0%
  //item.textContent = i + 1; // Temporary: Add text content for each square
  container.appendChild(item); 
  item.style.width = `calc(100% / ${columns})`;
  item.style.height = item.style.width;


}



  const items = document.querySelectorAll('.grid-item');
  items.forEach(item => {

    let mode = 'pencil';

    const colour = document.getElementById('colourful'); //colour mode
    colour.addEventListener('click', () => {   
    mode = 'colourful'; 
    });

    const pencil = document.getElementById('pencil'); //pencil mode
    pencil.addEventListener('click', () => {
      mode = 'pencil';
    });
  
    item.addEventListener('mouseenter', () => {
      item.style.backgroundColor = 'black';
  
  });

  item.addEventListener('mouseleave', () => {  
      if (mode === 'pencil'){
      item.style.backgroundColor = 'black';
      } else if (mode === 'colourful'){
      item.style.backgroundColor = getRandomColor();
      }
    

  
  let currentOpacity = parseInt(item.dataset.opacity); //Gradual opacity code
      currentOpacity += 15;
      if (currentOpacity <= 100) { // Cap at 100%
        item.dataset.opacity = currentOpacity;
        item.style.opacity = currentOpacity / 100; // 0.0 to 1.0
      }
  });

  

});
  
}






