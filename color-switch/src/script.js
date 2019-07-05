'use strict';

const colors = [
  '#FFFFFF',
  '#2196F3',
  '#4CAF50',
  '#FF9800',
  '#009688',
  '#795548',
];

const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};


const btnStart = document.querySelector('button[data-action=start]');
const btnStop = document.querySelector('button[data-action=stop]');
const body = document.querySelector('body');
let timerId = null;

function getIndex(colors) {
  const indexChoose = randomIntegerFromInterval(0, colors.length);
  return indexChoose;
}

function getColor(colors) {
  const bodyColor = colors[getIndex(colors)];
  body.style.backgroundColor = bodyColor;
}
function setColor(colors) {
  timerId = setInterval(() => {
    getColor(colors);
  }, 1000);
}

btnStart.addEventListener('click', () => {
  setColor(colors);
  btnStart.disabled = true;
  if (btnStop.disabled) {
    btnStop.disabled = false;
  }
});

btnStop.addEventListener('click', () => {
  clearInterval(timerId);
  btnStart.disabled = false;
  btnStop.disabled = true;
});
