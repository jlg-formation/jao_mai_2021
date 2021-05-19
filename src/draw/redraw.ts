import drawCircles from './circles';
import {drawText} from './text';
import {drawLines} from './lines';
import {clean} from './clean';
import {State} from '../interfaces/State';
import {drawButtonLabel, drawLabel} from './label';

export const redraw = (state: State, previousPlaying: boolean) => {
  clean();
  drawLabel(state, 'sample');
  drawLabel(state, 'multi');
  drawButtonLabel(state, previousPlaying);
  drawCircles(state);
  drawText(state);
  drawLines(state);
};
