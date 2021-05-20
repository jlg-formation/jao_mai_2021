import {State} from './interfaces/State';
import {$} from './misc';

export function init(state: State) {
  setListener(state, 'sample');
  setListener(state, 'multi');
  setCheckBoxListener(state);
  setPlay(state);
}

function setListener(state: State, prop: 'multi' | 'sample') {
  const inputElt = $(`input[name="${prop}"]`) as HTMLInputElement;
  state[prop] = +inputElt.value;
  inputElt.addEventListener('input', () => {
    state[prop] = +inputElt.value;
  });
}

function setCheckBoxListener(state: State) {
  const inputElt = $(`input[name="autostop"]`) as HTMLInputElement;
  state.autostop = inputElt.checked;
  inputElt.addEventListener('input', () => {
    console.log('change');
    state.autostop = inputElt.checked;
  });
}

function setPlay(state: State) {
  const button = $('button.play') as HTMLButtonElement;
  button?.addEventListener('click', () => {
    state.playing = !state.playing;
  });
}
