import {clone} from 'lodash';
import {sampleInit, multiInit} from './misc';
import {MultiplicationComponent} from './MultiplicationComponent';

const state = {
  sample: sampleInit,
  multi: multiInit,
  playing: false,
};

const main = () => {
  const c = {
    toto: 34,
    titi: [2, 3, 4],
  };
  const d = clone(c);
  console.log('d: ', d);
  const component = new MultiplicationComponent(state);
  component.init();
  component.redraw();
};

main();
