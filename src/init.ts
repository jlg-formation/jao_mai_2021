import {State} from './interfaces/State';

export function init(state: State) {
  setListener(state, 'sample');
  setListener(state, 'multi');
  setPlay(state);
}

function setListener(state: State, prop: 'multi' | 'sample') {
  const inputElt = document.querySelector(
    `input[name="${prop}"]`,
  ) as HTMLInputElement;
  state[prop] = +inputElt.value;
  inputElt.addEventListener('input', () => {
    state[prop] = +inputElt.value;
  });
}

function setPlay(state: State) {
  const button = document.querySelector('button.play') as HTMLButtonElement;
  button?.addEventListener('click', () => {
    state.playing = !state.playing;
  });
}
