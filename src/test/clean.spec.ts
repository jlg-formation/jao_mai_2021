import {clean} from '../draw/clean';

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
    const g = document.querySelector('g.points') as HTMLElement;
    assert(g.childElementCount === 0);
  });
});
