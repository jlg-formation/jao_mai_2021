import {redraw} from './draw/redraw';
import {init} from './init';
import {State} from './interfaces/State';

export class MultiplicationComponent implements State {
  private _sample = 0;
  get sample(): number {
    return this._sample;
  }

  set sample(val: number) {
    console.log('set sample to ' + val);
    this._sample = val;
    this.redraw();
  }

  private _multi = 0;
  get multi(): number {
    return this._multi;
  }

  set multi(val: number) {
    this._multi = val;
    this.redraw();
  }

  constructor(state: State) {
    this.sample = state.sample;
    this.multi = state.multi;
  }

  init() {
    init(this);
  }

  redraw() {
    redraw(this);
  }
}
