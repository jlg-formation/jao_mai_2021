import {redraw} from './draw/redraw.js';

export function init(state) {
  setListener(state, 'sample');
  setListener(state, 'multi');
}

function setListener(state, prop) {
  const displayElt = document.querySelector(`div.command div.${prop} span`);
  displayElt.innerHTML = state.sample;
  const inputElt = document.querySelector(`input[name="${prop}"]`);
  inputElt.addEventListener('input', (evt) => {
    state[prop] = evt.target.value;
    displayElt.innerHTML = state[prop];
    redraw(state);
  });
}
