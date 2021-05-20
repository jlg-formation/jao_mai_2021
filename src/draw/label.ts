import {State} from '../interfaces/State';
import {$} from '../misc';

export function drawLabel(state: State, prop: 'multi' | 'sample') {
  const displayElt = $(`div.command div.${prop} span`);
  if (displayElt === null) {
    throw new Error('cannot find ' + `div.command div.${prop} span`);
  }
  const decimal = prop === 'multi' ? 2 : 0;
  displayElt.innerHTML = '' + state[prop].toFixed(decimal);

  const inputElt = $(`div.command input[name="${prop}"] `) as HTMLInputElement;
  inputElt.value = '' + state[prop];
}

export function drawCheckBoxLabel(state: State) {
  console.log('drawCheckBoxLabel');
  const elt = $(`input[name="autostop"]`) as HTMLInputElement;
  elt.value = '' + state.autostop;
}

export function drawButtonLabel(state: State, previousPlaying: boolean) {
  console.log('drawButtonLabel start', state.playing);
  if (previousPlaying === state.playing) {
    return;
  }
  const elt = $(`button.play`) as Element;
  console.log('elt: ', elt);
  elt.innerHTML = state.playing
    ? '<img src="src/assets/pause.svg">'
    : '<img src="src/assets/play.svg">';
}
