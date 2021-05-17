export function clean() {
  resetGroup('svg g.points');
  resetGroup('svg g.numbers');
  resetGroup('svg g.lines');
}

function resetGroup(selector) {
  const g = document.querySelector(selector);
  g.innerHTML = '';
}
