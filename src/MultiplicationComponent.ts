import {interval, Subscription} from 'rxjs';
import {redraw} from './draw/redraw';
import {init} from './init';
import {State} from './interfaces/State';

const MAX_MULTI = 5;

export class MultiplicationComponent implements State {
  private _multi = 0;
  private _playing = false;
  private _sample = 0;
  private subscription: Subscription | undefined;

  private previousPlaying = false;

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
    redraw(this, this.previousPlaying);
  }

  async toggleAnimation() {
    console.log('this.playing: ', this.playing);
    if (!this.playing) {
      if (this.subscription) {
        this.subscription.unsubscribe();
        this.subscription = undefined;
      }
      return;
    }
    this.subscription = interval(20).subscribe({
      next: (n) => {
        console.log('tick');
        if (this.multi > MAX_MULTI) {
          this.multi = 0;
          return;
        }
        this.multi += 0.01;
      },
      error: (err) => {
        console.log('err: ', err);
      },
      complete: () => {
        console.log('complete');
      },
    });
  }
}
