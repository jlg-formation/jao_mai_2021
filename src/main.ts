import {sampleInit, multiInit} from './misc';
import {init} from './init';
import {redraw} from './draw/redraw';

const state = {
  sample: sampleInit,
  multi: multiInit,
};

const main = () => {
  init(state);
  redraw(state);
};

main();
