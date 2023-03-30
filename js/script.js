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
  reset();

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

//genero le bome
function generateBombs(boxNumbers) {
  //
  const bombs = [];
  while(bombs.length < NUM_BOMBS){
    const bomb = getRandomNumber(1, boxNumbers);
    if(!bombs.includes(bomb)) bombs.push(bomb);
  }
  return bombs;
}

//genero numeri random per bombe
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

//show bombs
function showBombs() {
  const boxs = document.getElementsByClassName('box');
  for(let i = 0; i < boxs.length; i++){
    const box = boxs[i];

    if(bombs.includes(box.boxId)){
      console.log('sono una bomba', box.boxId);
      box.classList.add('bomb');
    }
  }
}

//click dei box
function adleClickBox() {

  if(bombs.includes(this.boxId)){
    endGame(false);
  }else{
    points++;
    this.removeEventListener('click', adleClickBox);

    const boxs = document.getElementsByClassName('box');
    if(points === boxs.length - NUM_BOMBS){
      endGame(true);
    }
  }
  this.classList.add('clicked');
}

//fine gioco come vincitore e perdente
function endGame(isWin) {

  showBombs()

  const endGame = document.createElement('div');
  endGame.className = 'end-game';
  container.append(endGame);
  console.log('FINE');
  
  const boxs = document.getElementsByClassName('box');
  let endMessageStr = '';

  if(isWin){
    endMessageStr = `HAI VINTO!!! Hai fatto ${points} punti su ${boxs.length - NUM_BOMBS}!`;
  }else{
    endMessageStr = `HAI PERSO!!! Hai fatto solo ${points} punti su ${boxs.length - NUM_BOMBS}!`;
  }
  document.querySelector('.endMessage').innerHTML = endMessageStr;
}

//reset di tutte le impostazioni per iniziare una nuova partita
function reset() {
  console.log('RESET');
  container.innerHTML = '';
  points = 0;
  bombs = [];
  document.querySelector('.endMessage').innerHTML = '';
}