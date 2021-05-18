import {State} from './interfaces/State';
import {redraw} from './draw/redraw';

export function init(state: State) {
  setListener(state, 'sample');
  setListener(state, 'multi');
}

function setListener(state: State, prop: keyof State) {
  const displayElt = document.querySelector(`div.command div.${prop} span`);
  if (displayElt === null) {
    throw new Error('cannot find ' + `div.command div.${prop} span`);
  }
  displayElt.innerHTML = '' + state.sample;
  const inputElt = document.querySelector(`input[name="${prop}"]`);
  if (inputElt === null) {
    throw new Error('cannot find input ' + `input[name="${prop}"]`);
  }
  inputElt.addEventListener('input', (evt) => {
    if (evt.target === null) {
      throw new Error('no target found.');
    }
    state[prop] = +(evt.target as HTMLInputElement).value;
    displayElt.innerHTML = state[prop] + '';
    redraw(state);
  });
}
