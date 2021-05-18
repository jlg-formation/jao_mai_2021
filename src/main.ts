import {sampleInit, multiInit} from './misc';
import {MultiplicationComponent} from './MultiplicationComponent';

const state = {
  sample: sampleInit,
  multi: multiInit,
};

const main = () => {
  const component = new MultiplicationComponent(state);
  component.init();
  component.redraw();
};

main();
