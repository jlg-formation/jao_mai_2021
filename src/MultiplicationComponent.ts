import {redraw} from './draw/redraw';
import {init} from './init';
import {State} from './interfaces/State';

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

  toggleAnimation() {
    console.log('this.playing: ', this.playing);
    if (this.playing) {
      console.log('toggleAnimation: start');
      this.timeout = setInterval(() => {
        console.log('tick');
        this.multi += 0.01;
        if (this.multi > MAX_MULTI) {
          this.multi = 0;
        }
      }, 150) as unknown as number;
      console.log('this.timeout: ', this.timeout);
      return;
    }
    console.log('toggleAnimation: stop');
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }
}
