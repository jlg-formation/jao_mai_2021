import drawCircles from './circles.js';
import {drawText} from './text.js';
import {drawLines} from './lines.js';
import {clean} from './clean.js';

export const redraw = (state) => {
  clean();
  drawCircles(state);
  drawText(state);
  drawLines(state);
};
