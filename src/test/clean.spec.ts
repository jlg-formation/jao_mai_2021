import {clean} from '../draw/clean';
import {$} from '../misc';

const assert = (expr: boolean) => {
  if (!expr) {
    throw new Error('fail');
  }
};

describe('Test', function () {
  before(() => {
    console.log('before');
  });
  it('test clean', function () {
    clean();
    const g = $('g.points') as HTMLElement;
    assert(g.childElementCount === 0);
  });
});
