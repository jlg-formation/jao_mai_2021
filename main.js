import drawCircles from './src/draw/circles.js';
import {drawLines} from './src/draw/lines.js';
import {drawText} from './src/draw/text.js';
import {n} from './src/misc.js';

const redraw = () => {
  drawCircles();
  if (n <= 20) {
    drawText();
  }
  drawLines();
};

const main = () => {
  redraw();
};

main();
