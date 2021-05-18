import {State} from '../interfaces/State';

export function drawLabel(state: State, prop: keyof State) {
  const displayElt = document.querySelector(`div.command div.${prop} span`);
  if (displayElt === null) {
    throw new Error('cannot find ' + `div.command div.${prop} span`);
  }
  displayElt.innerHTML = '' + state.sample;
}
