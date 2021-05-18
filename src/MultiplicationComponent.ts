import {redraw} from './draw/redraw';
import {init} from './init';
import {State} from './interfaces/State';
import {sleep} from './misc';

const MAX_MULTI = 5;

export class MultiplicationComponent implements State {
  private _multi = 0;
  private _playing = false;
  private _sample = 0;

  private timeout: number | undefined;

  constructor(state: State) {
    this.sample = state.sample;
    this.multi = state.multi;
  }

  get multi(): number {
    return this._multi;
  }

  set multi(val: number) {
    this._multi = val;
    this.redraw();
  }

  get playing(): boolean {
    return this._playing;
  }

  set playing(val: boolean) {
    this._playing = val;
    this.toggleAnimation();
    this.redraw();
  }

  get sample(): number {
    return this._sample;
  }

  set sample(val: number) {
    console.log('set sample to ' + val);
    this._sample = val;
    this.redraw();
  }

  init() {
    init(this);
  }

  redraw() {
    redraw(this);
  }

  async toggleAnimation() {
    console.log('this.playing: ', this.playing);
    while (this.playing) {
      console.log('tick');
      this.multi += 0.01;
      if (this.multi > MAX_MULTI) {
        this.multi = 0;
      }
      await sleep(1000);
    }
  }
}
