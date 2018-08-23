const color1El = document.getElementById('color1');
const color2El = document.getElementById('color2');
const colorMessage = document.getElementsByTagName('h3')[0];
const colorBtn = document.getElementsByTagName('button')[0];

let color2 = color2El.value;

color1El.addEventListener('input',handleColorChange);
color2El.addEventListener('input',handleColorChange);
colorBtn.addEventListener('click',randomColor);

function handleColorChange(){
  changeColor();
}

function changeColor(c1,c2){
  let color1 = c1 || color1El.value;
  let color2 = c2 || color2El.value;
  document.documentElement.style.setProperty('--color1',color1);
  document.documentElement.style.setProperty('--color2',color2);
  colorMessage.innerHTML = `${color1} to ${color2}`;
}

function randomColor(){
  const color1 = `#${rgbToHex(Math.floor(Math.random()*255))}${rgbToHex(Math.floor(Math.random()*255))}${rgbToHex(Math.floor(Math.random()*255))}`
  let color2 = `#${rgbToHex(Math.floor(Math.random()*255))}${rgbToHex(Math.floor(Math.random()*255))}${rgbToHex(Math.floor(Math.random()*255))}`;

  color1El.value = color1;
  color2El.value = color2;
  changeColor(color1, color2);
}

function rgbToHex(rgb){
  var hex = Number(rgb).toString(16);
  if(hex.length<2){
    hex="0"+hex;
  }
  return hex;
}