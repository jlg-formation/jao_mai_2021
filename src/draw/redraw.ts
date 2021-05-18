import drawCircles from './circles';
import {drawText} from './text';
import {drawLines} from './lines';
import {clean} from './clean';
import {State} from '../interfaces/State';

export const redraw = (state: State) => {
  clean();
  drawCircles(state);
  drawText(state);
  drawLines(state);
};
