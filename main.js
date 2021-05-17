import {sampleInit, multiInit} from './src/misc.js';
import {init} from './src/init.js';
import {redraw} from './src/draw/redraw.js';

const state = {
  sample: sampleInit,
  multi: multiInit,
};

const main = () => {
  init(state);
  redraw(state);
};

main();
