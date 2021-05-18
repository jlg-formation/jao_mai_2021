import {State} from './interfaces/State';

export function init(state: State) {
  setListener(state, 'sample');
  setListener(state, 'multi');
}

function setListener(state: State, prop: keyof State) {
  const inputElt = document.querySelector(
    `input[name="${prop}"]`,
  ) as HTMLInputElement;
  state[prop] = +inputElt.value;
  inputElt.addEventListener('input', () => {
    state[prop] = +inputElt.value;
  });
}
