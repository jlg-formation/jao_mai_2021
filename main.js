import drawCircles from './src/draw/circles.js';
import {drawLines} from './src/draw/lines.js';
import {drawText} from './src/draw/text.js';
import {sampleInit, multiInit} from './src/misc.js';
import {clean} from './src/draw/clean.js';

const redraw = (state) => {
  clean();
  drawCircles(state);
  drawText(state);
  drawLines(state);
};

const state = {
  sample: sampleInit,
  multi: multiInit,
};

const main = () => {
  redraw(state);
};

main();

const sampleLabelElt = document.querySelector('div.command div.sample span');
sampleLabelElt.innerHTML = state.sample;
const sampleInputElt = document.querySelector('input[name="sample"]');
sampleInputElt.addEventListener('input', (evt) => {
  state.sample = evt.target.value;
  sampleLabelElt.innerHTML = state.sample;
  redraw(state);
});
