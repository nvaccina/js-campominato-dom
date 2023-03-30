//ELEMENTS
const playBtn = document.querySelector('.play-button');
const container = document.querySelector('.container');
const levelSelect = document.getElementById('level');

//DATA
const gridLevels = [100, 81, 49];
const NUM_BOMBS = 16;
let bombs = [];
let points = 0;

//AZIONE PLAY
playBtn.addEventListener('click', play);

/*----------------------FUNCTION------------------------*/
//play
function play() {
  console.log('PLAY');
  

  const boxNumbers = gridLevels[levelSelect.value];

  generatePlayGround(boxNumbers);

  bombs = generateBombs(boxNumbers);
  console.log(bombs);
}

//genero il box
function createBox(boxNumbers, id){
  const box = document.createElement('div');
  box.className = 'box'; 
  box.classList.add('square' + boxNumbers);
  box.boxId = id;
  box.innerHTML = `<span>${id}</span>`;
  box.addEventListener('click',adleClickBox)
  return box;  
}

//genero la griglia
function generatePlayGround(boxNumbers){
  const grid = document.createElement('div');
  grid.className = 'grid';
  for(let i = 1; i <= boxNumbers; i++){
    const box = createBox(boxNumbers, i);
    grid.append(box);
  }
  container.append(grid);  
}

//GENERA BOMBE
function generateBombs(boxNumbers) {
  //
  const bombs = [];
  while(bombs.length < NUM_BOMBS){
    const bomb = getRandomNumber(1, boxNumbers);
    if(!bombs.includes(bomb)) bombs.push(bomb);
  }
  return bombs;
}

//genera numeri random per bomba
function getRandomNumber(min, max){
  let error = false;
  let errorMsg;
  if(isNaN(min) || isNaN(max)){
    error = true;
    errorMsg = 'min e max devono essere numeri';
  }
  if(error){
    console.error(errorMsg);
    return;
  }
  return Math.floor(Math.random()*(max - min + 1) + min);
}
