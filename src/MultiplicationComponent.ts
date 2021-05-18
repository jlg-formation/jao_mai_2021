import {redraw} from './draw/redraw';
import {init} from './init';
import {State} from './interfaces/State';

export class MultiplicationComponent {
  constructor(private state: State) {}

  init() {
    init(this.state);
  }

  redraw() {
    redraw(this.state);
  }
}
