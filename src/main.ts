import {sampleInit, multiInit} from './misc.js';
import {init} from './init.js';
import {redraw} from './draw/redraw.js';

const state = {
  sample: sampleInit,
  multi: multiInit,
};

const main = () => {
  init(state);
  redraw(state);
};

main();
