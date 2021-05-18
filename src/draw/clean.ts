export function clean() {
  resetGroup('svg g.points');
  resetGroup('svg g.numbers');
  resetGroup('svg g.lines');
}

function resetGroup(selector: string) {
  const g = document.querySelector(selector);
  if (!g) {
    throw new Error('cannot find selector');
  }
  g.innerHTML = '';
}
