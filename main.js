import drawCircles from './src/draw/circles.js';
import {drawLines} from './src/draw/lines.js';
import {drawText} from './src/draw/text.js';
import {sampleInit} from './src/misc.js';
import {clean} from './src/draw/clean.js';

let sample = sampleInit;

const redraw = (sample) => {
  clean();
  drawCircles(sample);
  drawText(sample);
  drawLines(sample);
};

const main = () => {
  redraw(sample);
};

main();

const sampleLabelElt = document.querySelector('div.command div.sample span');
sampleLabelElt.innerHTML = sample;
const sampleInputElt = document.querySelector('input[name="sample"]');
sampleInputElt.addEventListener('input', (evt) => {
  sample = evt.target.value;
  sampleLabelElt.innerHTML = sample;
  redraw(sample);
});
