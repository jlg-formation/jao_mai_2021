import {State} from '../interfaces/State';

export function drawLabel(state: State, prop: 'multi' | 'sample') {
  const displayElt = document.querySelector(`div.command div.${prop} span`);
  if (displayElt === null) {
    throw new Error('cannot find ' + `div.command div.${prop} span`);
  }
  const decimal = prop === 'multi' ? 2 : 0;
  displayElt.innerHTML = '' + state[prop].toFixed(decimal);
}

export function drawButtonLabel(state: State) {
  const elt = document.querySelector(`button.play`) as Element;
  console.log('elt: ', elt);
  elt.innerHTML = state.playing
    ? '<img src="src/assets/pause.svg">'
    : '<img src="src/assets/play.svg">';
}
